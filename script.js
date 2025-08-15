// Sidebar Navigation (Clients / Versions / Settings)
const navButtons = document.querySelectorAll(".sidebar-nav button");
const pages = document.querySelectorAll(".page");

const preview = document.getElementById("preview");
const versionSelect = document.getElementById("version-select");
const iframe = document.getElementById("game-frame");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById("page-" + target).classList.add("active");
  });
});

// Top tabs (optional demo)
document.querySelectorAll(".top-tabs .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".top-tabs .tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    // we don’t switch page here (only visual)
  });
});

// Preview image URLs for each client
const previewImages = {
  tuff: "https://i.redd.it/tuff-client-1-0-0-v0-fo6pz29y6tbf1.png?width=1691&format=png&auto=webp&s=b229e29f2a8f38dfd41205db87b399699695f889",
  "152": "https://i.imgur.com/3JKXKPF.jpg", // <-- placeholder, change to your own if you want
  "18":  "https://i.imgur.com/3JKXKPF.jpg"  // <-- placeholder, change to your own if you want
};

// Client URLs to load
const clientUrls = {
  tuff: "https://client.eaglercraft.dev/TuffClientJS/",
  "152": "https://client.eaglercraft.dev/eaglercraft152/",
  "18":  "https://client.eaglercraft.dev/eaglercraft18/"
};

// Change preview when selection changes
versionSelect.addEventListener("change", e => {
  preview.style.backgroundImage = `url('${previewImages[e.target.value]}')`;
});

// Initial preview on page load
preview.style.backgroundImage = `url('${previewImages[versionSelect.value]}')`;

// PLAY button
document.getElementById("play-button").addEventListener("click", () => {
  const key = versionSelect.value;
  const url = clientUrls[key];

  // show the iframe and load the client
  iframe.style.display = "block";
  iframe.src = url;
});
