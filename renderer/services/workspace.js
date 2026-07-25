const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function createWorkspace() {

    const jobId = crypto.randomUUID();

    const workspaceDir = path.join(
        __dirname,
        "..",
        "jobs",
        jobId
    );

    fs.mkdirSync(workspaceDir, { recursive: true });

    return {

        jobId,

        workspaceDir,

        creativeBriefPath: path.join(
            workspaceDir,
            "creative-brief.json"
        ),

        backgroundPath: path.join(
            workspaceDir,
            "background.png"
        ),

        posterPath: path.join(
            workspaceDir,
            "poster.png"
        )

    };

}

module.exports = {
    createWorkspace
};