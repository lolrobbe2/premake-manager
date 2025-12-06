// docsfetch.js
export default class DocsFetch {
    constructor(fieldname) {
        this.url = `https://raw.githubusercontent.com/premake/premake-core/refs/heads/master/website/docs/${fieldname}.md`;
    }

    async getFirstSentence() {
        const res = await fetch(this.url);
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        let text = await res.text();

        // Strip YAML frontmatter if present
        if (text.startsWith("---")) {
            const end = text.indexOf("\n---", 3);
            if (end !== -1) {
                text = text.slice(end + 4);
            }
        }

        // Strip :::note ... ::: blocks
        text = text.replace(/:::note[\s\S]*?:::/g, "");

        // Split into paragraphs by blank lines
        const paragraphs = text
            .split(/\r?\n\r?\n/)
            .map(p => p.trim())
            .filter(p => p.length > 0);

        if (paragraphs.length === 0) return null;

        // Extract only the first sentence from the first paragraph
        const firstParagraph = paragraphs[0];
        const match = firstParagraph.match(/.*?[.!?](\s|$)/);
        const firstSentence = match ? match[0].trim() : firstParagraph;
        return firstSentence.replace("\n","");
    }
}
