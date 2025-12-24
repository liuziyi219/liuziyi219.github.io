(() => {
  const root = document.documentElement;
  const KEY = "site-theme"; // light | dark | auto
  const buttons = [...document.querySelectorAll("[data-set-theme]")];

  function apply(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(KEY, theme);

    buttons.forEach((b) => {
      const active = b.dataset.setTheme === theme;
      b.setAttribute("aria-pressed", String(active));
    });
  }

  apply(localStorage.getItem(KEY) || "auto");

  buttons.forEach((b) => {
    b.addEventListener("click", () => apply(b.dataset.setTheme));
  });

  // Footer year (optional)
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
