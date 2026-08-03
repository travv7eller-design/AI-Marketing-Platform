const fs = require("fs");
const path = require("path");

// Read JSON passed as the first command-line argument
const creativeBrief = JSON.parse(process.argv[2]);

const outputPath = path.join(
    __dirname,
    "../input/creative-brief.json"
);

fs.writeFileSync(
    outputPath,
    JSON.stringify(creativeBrief, null, 2),
    "utf8"
);

console.log("[INFO] Creative Brief saved successfully.");