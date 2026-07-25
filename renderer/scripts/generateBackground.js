const fs = require("fs");
const path = require("path");
const { InferenceClient } = require("@huggingface/inference");
const config = require("../config");

const client = new InferenceClient(process.env.HF_API_KEY);

async function generateBackground(workspace) {

    const creativeBriefPath =
    workspace.creativeBriefPath;

    const creativeBrief = JSON.parse(
        fs.readFileSync(creativeBriefPath, "utf8")
    );

    const fluxPrompt = creativeBrief.flux_prompt;

    console.log("[INFO] Creative Brief loaded.");
    console.log("[INFO] Generating background...");

    const outputPath =
    workspace.backgroundPath;

    // ==========================
    // MOCK MODE
    // ==========================
    if (config.imageMode === "mock") {

        console.log("[INFO] MOCK MODE enabled.");

        const mockImagePath = path.join(
            __dirname,
            "../mock/background.png"
        );

        fs.copyFileSync(mockImagePath, outputPath);

        console.log("[INFO] Mock background copied.");

        return;
    }

    // ==========================
    // LIVE MODE
    // ==========================
    const image = await client.textToImage({
        model: "black-forest-labs/FLUX.1-schnell",
        inputs: fluxPrompt,
    });

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);

    console.log("[INFO] Background saved successfully.");
}

module.exports = generateBackground;
;