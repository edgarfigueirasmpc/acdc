(function () {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");
  const cartaTabs = document.querySelectorAll(".carta-tab");
  const cartaPanels = document.querySelectorAll(".carta-panel");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");
  const lightboxClose = document.querySelector(".lightbox__close");

  // Mobile menu
  menuToggle?.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    menuToggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("is-open")
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });

  // Active nav on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));

  // Carta tabs
  cartaTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      cartaTabs.forEach((t) => t.classList.remove("is-active"));
      cartaPanels.forEach((p) => p.classList.remove("is-active"));

      tab.classList.add("is-active");
      document.getElementById(`panel-${target}`)?.classList.add("is-active");
    });
  });

  // Lightbox for carta images
  document.querySelectorAll("[data-lightbox]").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
