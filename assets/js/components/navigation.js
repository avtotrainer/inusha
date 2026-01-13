export function initNavigation(root) {
  const button = root.querySelector(".hamburger");
  const menu = root.querySelector(".menu");

  if (!button || !menu) return;

  function close() {
    root.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = root.classList.toggle("is-open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) close();
  });
}
