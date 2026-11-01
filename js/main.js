const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
if (btn && nav) {
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

const form = document.getElementById("offerteform");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const success = document.getElementById("success");
    const button = form.querySelector("button[type=submit]");
    if (button) button.disabled = true;
    try {
      const data = new FormData(form);
      let total = 0;
      form.querySelectorAll("input[type=file]").forEach((f) => { if (f.files[0]) total += f.files[0].size; });
      if (total > 8 * 1024 * 1024) {
        if (success) {
          success.style.display = "block";
          success.textContent = "De bestanden zijn samen groter dan 8 MB. Kies kleinere foto’s of stuur ze via WhatsApp.";
        }
        return;
      }
      if (button) button.textContent = "Bezig met versturen...";
      const res = await fetch("/", { method: "POST", body: data });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      if (success) {
        success.style.display = "block";
        success.textContent = "Bedankt. We nemen zo snel mogelijk contact op.";
      }
    } catch (err) {
      if (success) {
        success.style.display = "block";
        success.textContent = "Versturen lukte niet. Bel of WhatsApp ons op 06 - 25 21 31 91.";
      }
    } finally {
      if (button) { button.disabled = false; button.textContent = "Verstuur aanvraag"; }
    }
  });
}
