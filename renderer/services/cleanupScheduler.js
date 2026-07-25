const fs = require("fs/promises");
const path = require("path");

const JOBS_DIR = path.join(__dirname, "../jobs");

const MAX_JOB_AGE = 20 *  1000; // 10 minutes

async function cleanupOldWorkspaces() {

    try {

        const workspaces = await fs.readdir(JOBS_DIR);

        const now = Date.now();

        for (const folder of workspaces) {

            const workspacePath = path.join(JOBS_DIR, folder);

            const stats = await fs.stat(workspacePath);

            const age = now - stats.birthtimeMs;

            if (age > MAX_JOB_AGE) {

                await fs.rm(workspacePath, {
                    recursive: true,
                    force: true
                });

                console.log(`[CLEANUP] Removed ${folder}`);

            }

        }

    } catch (err) {

        console.error("[CLEANUP]", err.message);

    }

}

function startCleanupScheduler() {

    console.log("[CLEANUP] Scheduler Started");

    setInterval(cleanupOldWorkspaces, 5000);

}

module.exports = startCleanupScheduler;