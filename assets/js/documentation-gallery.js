(function () {
  const figures = Array.from(document.querySelectorAll(".photo-rail figure"));
  const lightbox = document.querySelector(".photo-lightbox");

  if (!figures.length || !lightbox) {
    return;
  }

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const previousButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  let activeIndex = 0;

  function showPhoto(index) {
    activeIndex = (index + figures.length) % figures.length;
    const figure = figures[activeIndex];
    const image = figure.querySelector("img");
    const caption = figure.querySelector("figcaption");

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.innerHTML = caption ? caption.innerHTML : "";
  }

  function openLightbox(index) {
    showPhoto(index);
    lightbox.hidden = false;
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    const trigger = figures[activeIndex].querySelector(".photo-zoom-button");
    if (trigger) {
      trigger.focus();
    }
  }

  figures.forEach((figure, index) => {
    const button = figure.querySelector(".photo-zoom-button");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => openLightbox(index));
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => showPhoto(activeIndex - 1));
  nextButton.addEventListener("click", () => showPhoto(activeIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      showPhoto(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      showPhoto(activeIndex + 1);
    }
  });
})();
