export function initLangSwitcher(root) {
  const button = root.querySelector(".lang-current");
  const list = root.querySelector(".lang-list");

  if (!button || !list) return;

  // Mobile-only guard
  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  function open() {
    root.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
  }

  function close() {
    root.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  }

  function toggle(e) {
    e.stopPropagation();
    if (!isMobile()) return;

    root.classList.contains("is-open") ? close() : open();
  }

  button.addEventListener("click", toggle);

  // Click outside → close
  document.addEventListener("click", (e) => {
    if (!isMobile()) return;
    if (!root.contains(e.target)) close();
  });

  // ESC → close
  document.addEventListener("keydown", (e) => {
    if (!isMobile()) return;
    if (e.key === "Escape") close();
  });
}
