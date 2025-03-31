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

// Relpace placeholders in html
document.addEventListener("DOMContentLoaded", () => {

    // Define content for text constants
    const labels = {
        NAV_ITEM_1: "Home",
        NAV_ITEM_2: "About",
        NAV_ITEM_3: "Services",
        NAV_ITEM_4: "Contact",
        FOOTER: "support@drivebelt.pro",
        COPYRIGHT: "© 2025 Drivebelt LLC. All rights reserved.",
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

// Email Service

// document.getElementById("contact-form").addEventListener("submit", async function(event) {
//     event.preventDefault(); // Prevent page reload on form submission

//     const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

//     try {
//         let response = await fetch("https://emailsender.akageorgis.workers.dev/", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//             document.getElementById("success-message").style.display = "block";
//             document.getElementById("contact-form").reset(); // Clear the form
//         } else {
//             throw new Error("Failed to send message");
//         }
//     } catch (error) {
//         document.getElementById("error-message").style.display = "block";
//     }
// });
