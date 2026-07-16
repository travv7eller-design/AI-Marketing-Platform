const fs = require("fs");
const puppeteer = require("puppeteer");
const path = require("path");
const RENDER_CONFIG = {
    width: 1080,
    height: 1350,
    deviceScaleFactor: 2
};

async function main() {
    const creativeBriefPath = path.join(
        __dirname,
        "../input/creative-brief.json"
    );
    
    const creativeBrief = JSON.parse(
        fs.readFileSync(creativeBriefPath, "utf8")
    );
    
    console.log("[INFO] Creative Brief loaded.");

    console.log("[STEP 1] Launching Chromium...");

    const browser = await puppeteer.launch({
        headless: true
    });

    console.log("[STEP 2] Opening a new page...");

    const page = await browser.newPage();
    
    await page.setViewport(RENDER_CONFIG);

    const filePath = `file://${path.join(__dirname, "../templates/poster.html")}`;

    console.log("[STEP 3] Loading HTML...");

    await page.goto(filePath, {
        waitUntil: "networkidle0"
    });
    console.log(creativeBrief);
    await page.evaluate((data) => {
        document.getElementById("company").innerText =
        data.company;

    document.getElementById("headline").innerText =
        data.headline;

    document.getElementById("tagline").innerText =
        data.tagline;
        
        const poster = document.getElementById("poster");
        
        poster.style.backgroundImage =
            "url(file:///S:/MarketingPlatform/temp/background.png)";
        
        poster.style.backgroundSize = "cover";
        poster.style.backgroundPosition = "center";
    
    }, creativeBrief);

    console.log("[STEP 4] Taking screenshot...");

    const poster = await page.$("#poster");

if (!poster) {
    throw new Error("Poster element not found.");
}

await poster.screenshot({
    path: path.join(__dirname, "../output/poster.png")
});

console.log("[STEP 5] Screenshot saved.");

await browser.close();
console.log("[STEP 6] Browser closed.");
}

main().catch(console.error);