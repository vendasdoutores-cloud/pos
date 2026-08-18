const yearEl = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");
const printBtn = document.getElementById("printBtn");
const printBtnSecondary = document.getElementById("printBtnSecondary");
const root = document.documentElement;

yearEl.textContent = new Date().getFullYear();

function currentTheme() {
  return root.dataset.theme === "light" ? "light" : "dark";
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

function printPage() {
  window.print();
}

printBtn.addEventListener("click", printPage);
printBtnSecondary.addEventListener("click", printPage);

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

const sections = [...document.querySelectorAll("main section[id]")];
const menuLinks = [...navLinks.querySelectorAll("a")];
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { threshold: 0.35 }
);
sections.forEach((section) => spy.observe(section));

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
