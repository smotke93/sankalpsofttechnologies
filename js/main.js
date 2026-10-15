(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const service = String(data.get("service") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = encodeURIComponent(`Website enquiry: ${service}`);
      const body = encodeURIComponent(
        `Hello SankalpSoftTechnologies,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n\n` +
        `Project details:\n${message}\n`
      );

      if (status) {
        status.textContent = "Opening your email app. Please review the message and press Send to contact us.";
      }
      window.location.href =
        `mailto:sankalpsofttechnologies@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
