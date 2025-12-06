// run-premake.mjs
import { spawn } from "child_process";
import fs from "fs";
import Converter from "./conerter.mjs";
import DocsFetch from "./docsfetch.mjs";
/**
 * @description runs the premake fields generate
 */
function runPremake() {
    return new Promise((resolve, reject) => {
        const premake = spawn("premake5", ["--file=docs/generate.lua"], {
            stdio: "inherit"
        });

        premake.on("error", (err) => {
            reject(err);
        });

        premake.on("exit", (code) => {
            if (code === 0 || code === 1) {
                resolve();
            } else {
                reject(new Error(`premake5 exited with code ${code}`));
            }
        });
    });
}

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
(async () => {
    await runPremake();

    const data = fs.readFileSync("docs/premake_fields.json", "utf8");
    const premakeFields = JSON.parse(data);

    let metaFields = ["--@meta premakeFields.lua", "---@alias Boolean\n---| \'\"On\"\'\n---| \'\"Off\'\""];
    const keys = Object.keys(premakeFields).sort();
    const total = keys.length;

    for (let i = 0; i < total; i++) {
        const key = keys[i];
        const df = new DocsFetch(key);
        const converter = new Converter(key, premakeFields[key], await df.getFirstSentence());
        metaFields.push(converter.toMeta());

        // progress bar
        const percent = Math.round(((i + 1) / total) * 100);
        const barLength = 30; // length of the bar in characters
        const filledLength = Math.round((barLength * (i + 1)) / total);
        const bar = "█".repeat(filledLength) + "-".repeat(barLength - filledLength);

        process.stdout.write(`\r[${bar}] ${percent}% (${i + 1}/${total})`);
    }

    console.log("\nDone!");

    const chunks = chunkArray(metaFields,100)
    const metaFieldsCombinedChunks = chunks.map(chunk => chunk.join("\n\n"));

    // Example: write each chunk to its own file
    metaFieldsCombinedChunks.forEach((chunkStr, idx) => {
        fs.writeFileSync(`resources/language/premakeFields_${idx + 1}.lua`, chunkStr, "utf8");
    });
})();
