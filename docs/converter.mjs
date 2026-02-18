// kind.mjs
class Kind {
    static aliases = {
        path: "string",
        directory: "string",
        file: "string",
        boolean: "Boolean",
        mixed: "string",
        array: "string",
    };
    constructor(value) {
        this.raw = value;

        // split by colon first (Premake uses "list:directory")
        this.parts = value.split(":").map(p => p.trim());

        this.parts = this.parts.map(p => Kind.aliases[p] || p);
        // if you ever have comma-separated values, you can do:
        // this.parts = value.split(",").map(p => p.trim());
    }

    getParts() {
        return this.parts;
    }
    isList() {
        return this.parts[0] === "list";
    }
    toAnnotation() {
        let annotation = [];
        for (let index = 0; index < this.parts.length; index++) {
            const element = this.parts[index];
            const next = this.parts[index + 1];
            if (element === "list") {
                if (next === "keyed") {
                    annotation.push("[string]");
                    index++;
                } else if (next === undefined) {
                    annotation.push(`string[]`);
                } else {
                    annotation.push(`${next}[]`);
                    index++;
                }
            } else {
                annotation.push(element);
            }
        }

        return annotation.join(" ");
    }

    toParam() {
        return `---@param value ${this.toAnnotation()}`;
    }
}

export class AllowedAlias {
    constructor(name, allowed) {
        this.name = name;
        this.allowed = allowed;
    }
    toAliasName() {
        return `${this.name}Allowed`;
    }
    toNameAlias() {
        return `---@alias ${this.toAliasName()}`;
    }
    toValueAlias(value) {
        return `---| \"${value}\"`;
    }
    toAlias() {
        let values = [this.toNameAlias()];
        this.allowed.forEach(element => {
            values.push(this.toValueAlias(element));
        });

        return values.join("\n");
    }
    toParam() {
        return `---@param value ${this.toAliasName()}`;
    }
}
export default class Converter {
    constructor(name, param, description) {
        this.description = description;
        this.Kind = new Kind(param.kind);
        if (param.allowed) {
            this.Allowed = new AllowedAlias(name, param.allowed);
        }
        this.url = `https://premake.github.io/docs/${name}/`;
        this.name = name;
    }
    toParam() {
        if (this.Allowed === undefined) {
            return this.Kind.toParam();
        }
        return this.Allowed.toParam();
    }
    toSignature() {
        return `local function ${this.name}(value) end`;
    }
    toDocsLink() {
        return `---[docs](${this.url})`;
    }
    toGlobal() {
        return `_G.${this.name}=${this.name}`;
    }
    toDescription() {
        return `---${this.description}`;
    }
    toMeta() {
        let sections = [
            this.toDescription(),
            "---",
            this.toDocsLink(),
            "---",
            this.toParam(),
            this.toSignature(),
            this.toGlobal(),
        ];
        if (this.Allowed !== undefined) {
            sections.unshift("\n");
            sections.unshift(this.Allowed.toAlias());
        }
        return sections.join("\n");
    }
    log() {
        console.log(this.toMeta());
    }
}

