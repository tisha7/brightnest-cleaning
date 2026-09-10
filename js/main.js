/* BrightNest Cleaning — site interactions */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.BRIGHTNEST_CONFIG || {};

  document.querySelectorAll("[data-brand-name]").forEach((el) => {
    if (config.brandName) el.textContent = config.brandName;
  });

  document.querySelectorAll("a[href^=\"#\"]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".pp-reveal").forEach((section) => {
    section.classList.add("is-visible");
  });
});
