require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(process.env.HF_API_KEY);

async function main() {

    const creativeBriefPath = path.join(
        __dirname,
        "../input/creative-brief.json"
    );

    const creativeBrief = JSON.parse(
        fs.readFileSync(creativeBriefPath, "utf8")
    );

    const fluxPrompt = creativeBrief.flux_prompt;

    console.log("[INFO] Creative Brief loaded.");
    console.log("[INFO] Generating background...");

    const image = await client.textToImage({
        model: "black-forest-labs/FLUX.1-schnell",
        inputs: fluxPrompt,
    });

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const outputPath = path.join(
        __dirname,
        "../../temp/background.png"
    );

    fs.writeFileSync(outputPath, buffer);

    console.log("[INFO] Background saved successfully.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});