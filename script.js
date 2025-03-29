// Get the header
var header = document.getElementById("Header");

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

console.log("Script.js is loading...");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Starting replacement...");

    // Define content for text constants
    const labels = {
        NAV_ITEM_1: "Home",
        NAV_ITEM_2: "About Us",
        NAV_ITEM_3: "Services",
        NAV_ITEM_4: "Contact Us",
        FOOTER: "akageorgis@gmail.com",
        COPYRIGHT: "© 2025 Drivebelt LLC. All rights reserved.",
        TITLE: "Drivebelt Services"
    };

    // Replace placeholders
    const replacePlaceholders = () => {
        let html = document.body.innerHTML;
        for (const [key, value] of Object.entries(labels)) {
            const placeholder = `{{${key}}}`;
            html = html.split(placeholder).join(value);
        }
        document.body.innerHTML = html;
        console.log("Placeholders replaced successfully.");
    };

    try {
        replacePlaceholders();
    } catch (error) {
        console.error("Error during replacement:", error);
    }
});