/*
 * Reserved for future browser-side functionality.
 *
 * Current renderer performs all data injection in render.js.
 *
 * Examples of future responsibilities:
 * - Animations
 * - Interactive elements
 * - Canvas rendering
 * - Client-side enhancements
 */
const creativeBrief = {
    company: "ABC Premium Tiles",
    headline: "Luxury Begins at Home",
    tagline: "Crafted for timeless living."
};

document.getElementById("company").textContent = creativeBrief.company;
document.getElementById("headline").textContent = creativeBrief.headline;
document.getElementById("tagline").textContent = creativeBrief.tagline;


const posterData = {
    company: "ABC Premium Tiles",
    headline: "Luxury Begins at Home",
    tagline: "Crafted for timeless living.",

   background: "../../temp/background.jpeg"
};

const poster = document.getElementById("poster");

if (posterData.background) {
    poster.style.backgroundImage =
        `url(${posterData.background})`;

    poster.style.backgroundSize = "cover";
    poster.style.backgroundPosition = "center";
}