const yearEl = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

yearEl.textContent = new Date().getFullYear();

function currentTheme() {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
  );
}

applyTheme(currentTheme());

themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme() === "dark" ? "light" : "dark");
});

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      reveal.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${(index % 5) * 70}ms`;
  reveal.observe(el);
});
