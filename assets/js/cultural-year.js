document.querySelectorAll(".cultural-year").forEach((container) => {
  const button = container.querySelector(".cultural-logo-button");
  if (!button) return;

  const close = () => {
    container.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", () => {
    const isOpen = container.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  container.addEventListener("mouseleave", close);

  button.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
      button.blur();
    }
  });
});
