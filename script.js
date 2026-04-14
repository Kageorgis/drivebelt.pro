function openNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  if (sidebar) {
    sidebar.style.width = "250px";
  }
  if (main) {
    main.style.marginLeft = "250px";
  }
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  if (sidebar) {
    sidebar.style.width = "0";
  }
  if (main) {
    main.style.marginLeft = "0";
  }
}

// Replace placeholders in legacy pages without rewriting the full document.
document.addEventListener("DOMContentLoaded", () => {
  const labels = {
    NAV_ITEM_1: "Home",
    NAV_ITEM_2: "About",
    NAV_ITEM_3: "Services",
    NAV_ITEM_4: "Contact",
    FOOTER: "support@drivebelt.pro",
    COPYRIGHT: "\u00a9 2026 Drivebelt LLC. All rights reserved.",
  };

  document.querySelectorAll("[data-nav]").forEach((element) => {
    const key = element.getAttribute("data-nav");
    if (labels[key]) {
      element.textContent = labels[key];
    }
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    let value = node.nodeValue;
    for (const [key, label] of Object.entries(labels)) {
      value = value.split(`{{${key}}}`).join(label);
    }
    node.nodeValue = value;
  });
});
