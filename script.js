(function () {
  const root = document.documentElement;

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme persistence
  const THEME_KEY = "site-theme"; // "light" | "dark" | "auto"
  const buttons = Array.from(document.querySelectorAll("[data-set-theme]"));

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);

    // Update pressed state for accessibility
    buttons.forEach((btn) => {
      const isPressed = btn.getAttribute("data-set-theme") === theme;
      btn.setAttribute("aria-pressed", String(isPressed));
    });
  }

  const saved = localStorage.getItem(THEME_KEY);
  setTheme(saved || "auto");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.getAttribute("data-set-theme")));
  });

  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.hasAttribute("hidden") === false;
      if (open) {
        mobileNav.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.removeAttribute("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close after clicking a link
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileNav.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
