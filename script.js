// Include the country code without a leading plus for WhatsApp links.
const whatsappNumber = "5531998686315";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const cake = link.dataset.cake;
  const message = cake
    ? `Oi! Quero saber mais e pedir uma fatia de ${cake} para a Feira de Empreendedorismo.`
    : "Oi! Conheci as fatias de bolo da Feira de Empreendedorismo da Escola Adventista da Pampulha e gostaria de saber mais.";
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".cake-card, .values-row div, .visit-art").forEach((element) => {
    element.classList.add("js-reveal");
    observer.observe(element);
  });
}
