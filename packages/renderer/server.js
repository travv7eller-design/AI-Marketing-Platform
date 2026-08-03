require("dotenv").config();
const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json({ limit: "20mb" }));

app.post("/render", (req, res) => {

    try {

        // -----------------------------
        // Save Creative Brief directly
        // -----------------------------
        const creativeBriefPath = path.join(
            __dirname,
            "input",
            "creative-brief.json"
        );

        fs.writeFileSync(
            creativeBriefPath,
            JSON.stringify(req.body, null, 2),
            "utf8"
        );

        console.log("[INFO] Creative Brief saved.");

    } catch (err) {

        console.error(err);
        return res.status(500).send("Failed to save creative brief.");

    }

    // -----------------------------
    // Generate Background
    // -----------------------------
    exec(
        "node scripts/generateBackground.js",
        {
            cwd: __dirname,
            env: process.env
        },
        (err, stdout, stderr) => {

            if (stdout) console.log(stdout);
            if (stderr) console.error(stderr);

            if (err) {
                return res.status(500).send(stderr || err.message);
            }

            // -----------------------------
            // Render Poster
            // -----------------------------
            exec(
                "node scripts/render.js",
                {
                    cwd: __dirname,
                    env: process.env
                },
                (err, stdout, stderr) => {

                    if (stdout) console.log(stdout);
                    if (stderr) console.error(stderr);

                    if (err) {
                        return res.status(500).send(stderr || err.message);
                    }

                    console.log("[INFO] Poster generated.");

                    const posterPath = path.join(
                        __dirname,
                        "output",
                        "poster.png"
                    );
                    
                    res.sendFile(posterPath);

                }
            );

        }
    );

});

app.listen(4000, () => {

    console.log("======================================");
    console.log(" Renderer Engine listening on :4000");
    console.log("======================================");

});