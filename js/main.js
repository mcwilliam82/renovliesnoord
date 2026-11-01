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
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
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
      if (button) button.disabled = false;
    }
  });
}
