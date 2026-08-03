const fs = require("fs").promises;
const path = require("path");

class PromptLoader {

    constructor(promptDirectory) {
        this.promptDirectory = promptDirectory;
    }

    async load(fileName) {

        try {

            const filePath = path.join(
                this.promptDirectory,
                fileName
            );

            return await fs.readFile(filePath, "utf8");

        } catch (error) {

            throw new Error(
                `PromptLoader Error: Unable to load '${fileName}'. ${error.message}`
            );

        }

    }

}

module.exports = PromptLoader;