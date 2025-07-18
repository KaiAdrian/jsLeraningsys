// Import funkcij iz modula
import { jeVeljavnoIme, jeVeljavenEmail, jeVeljavnaStarost } from "./validacija.js";

document.getElementById("poslji").addEventListener("click", () => {
  const ime = document.getElementById("ime").value.trim();
  const email = document.getElementById("email").value.trim();
  const starost = Number(document.getElementById("starost").value.trim());
  const izpis = document.getElementById("izpis");

  if (!jeVeljavnoIme(ime)) {
    izpis.textContent = "⚠️ Ime ni veljavno.";
    return;
  }

  if (!jeVeljavenEmail(email)) {
    izpis.textContent = "⚠️ Email ni veljaven.";
    return;
  }

  if (!jeVeljavnaStarost(starost)) {
    izpis.textContent = "⚠️ Starost mora biti med 10 in 130.";
    return;
  }

  izpis.textContent = `✅ Vse OK: ${ime}, ${email}, ${starost}`;
});
