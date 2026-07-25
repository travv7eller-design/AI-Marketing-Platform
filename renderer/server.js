const startCleanupScheduler =require("./services/cleanupScheduler");
require("dotenv").config();
const express = require("express");
const generateBackground = require("./scripts/generateBackground");
const renderPoster = require("./scripts/render");
const fs = require("fs");
const path = require("path");
const app = express();
const { createWorkspace } = require("./services/workspace");



app.use(express.json({ limit: "20mb" }));

app.post("/render", async (req, res) => {
    const workspace = createWorkspace();

    console.log("[WORKSPACE]", workspace);

    try {

        // -----------------------------
        // Save Creative Brief directly
        // -----------------------------
        const creativeBriefPath = workspace.creativeBriefPath;

        fs.writeFileSync(
            creativeBriefPath,
            JSON.stringify(req.body, null, 2),
            "utf8"
        );

        console.log("[INFO] Creative Brief saved.");

        await generateBackground(workspace);
    
        await renderPoster(workspace);
    
        console.log("[INFO] Poster generated.");
        return res.sendFile(workspace.posterPath);
        
        
    } catch (err) {

        console.error(err);
        return res.status(500).send("Failed to save creative brief.");

    }

    // -----------------------------
    // Generate Background
    // -----------------------------

});
startCleanupScheduler();
app.listen(4000, () => {

    console.log("======================================");
    console.log(" Renderer Engine listening on :4000");
    console.log("======================================");

});