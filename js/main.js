const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
if (btn && nav) {
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

const form = document.getElementById("offerteform");
if (form) {
  form.addEventListener("submit", async (e) => {
    const action = form.getAttribute("action") || "";
    if (action.includes("your-form-id")) {
      e.preventDefault();
      const success = document.getElementById("success");
      if (success) {
        success.style.display = "block";
        success.textContent = "Formulier is nog niet gekoppeld. Vervang Formspree-ID of koppel uw e-mail. Gegevens zijn lokaal nagebootst.";
      }
    }
  });
}
