/*const fs = require("fs/promises");

async function cleanupWorkspace(workspace) {
    console.log("[CLEANUP] Attempting cleanup...");
    try {
        await fs.access(workspace.workspaceDir);

        console.log(
            `[CLEANUP] Removing ${workspace.workspaceDir}`
        );
        await fs.rm(workspace.workspaceDir, {
            recursive: true,
            force: true
        });

        console.log(`[CLEANUP] Workspace removed: ${workspace.jobId}`);

    } catch (err) {

        console.error(err);
    }
}

module.exports = cleanupWorkspace;*/

const fs = require("fs/promises");

async function cleanupWorkspace(workspace) {

    console.log("Cleanup called");

    try {

        await fs.rm(workspace.workspaceDir, {
            recursive: true,
            force: true
        });

        console.log("Cleanup success");

    } catch(err){

        console.error(err);

    }

}

module.exports = cleanupWorkspace;