// Sidebar Navigation (Clients / Versions / Settings)
const navButtons = document.querySelectorAll(".sidebar-nav button");
const pages = document.querySelectorAll(".page");

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

// Play Button
document.getElementById("play-button").addEventListener("click", () => {
  const version = document.getElementById("version-select").value;
  // In the future you can use this value to launch/embed a URL
  alert("Launching " + version);
});
