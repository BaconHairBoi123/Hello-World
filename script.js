document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;

      submitBtn.classList.add("loading");
      submitBtn.innerHTML = "<span>Mengirim...</span>";
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.reset();

        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = "<span>Pesan Terkirim! ✓</span>";
        submitBtn.style.backgroundColor = "#22c55e";

        setTimeout(() => {
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = "";
        }, 3000);

        alert(
          "Terima kasih! Pesan Diterima. Kami akan menghubungi Anda dalam 24 jam."
        );
      }, 2000);
    });
  }

  document.body.classList.add("loaded");

  const cards = document.querySelectorAll(".card-hover");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});