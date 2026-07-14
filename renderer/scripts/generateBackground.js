require("dotenv").config();
const fs = require("fs");
const path = require("path");
async function main() {

    const creativeBriefPath = path.join(
        __dirname,
        "../input/creative-brief.json"
    );

    const creativeBrief = JSON.parse(
        fs.readFileSync(creativeBriefPath, "utf8")
    );

    const fluxPrompt = creativeBrief.flux_prompt;
    console.log(Object.keys(creativeBrief));
    console.log("Prompt exists:", !!creativeBrief.flux_prompt);
    console.log("[INFO] Flux prompt loaded.");

    const response = await fetch(
        "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.HF_API_KEY}`,
                "Content-Type": "application/json",
                Accept: "image/png"
            },
            body: JSON.stringify({
                inputs: fluxPrompt
            })
        }
    );
    console.log(process.env.HF_API_KEY?.substring(0, 6));

    if (!response.ok) {
        const errorBody = await response.text();
    
        console.error("Status:", response.status);
        console.error("Response:", errorBody);
    
        throw new Error("Hugging Face request failed.");
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const outputPath = path.join(
        __dirname,
        "../../temp/background.png"
    );

    fs.writeFileSync(outputPath, buffer);

    console.log("[INFO] Background saved successfully.");
}

main().catch(console.error);