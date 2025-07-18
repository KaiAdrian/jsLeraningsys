import {
	jeVeljavnoIme,
	jeVeljavenEmail,
	jeVeljavnaStarost,
} from "./validacija.js";

const posljiBtn = document.getElementById("poslji");
const izpis = document.getElementById("izpis");

// 📌 Prikaži obstoječe uporabnike iz localStorage
function prikaziUporabnike() {
	izpis.innerHTML = ""; // najprej počisti

	const shrani = localStorage.getItem("uporabniki");
	if (shrani) {
		const uporabniki = JSON.parse(shrani);

		uporabniki.forEach((up, i) => {
			izpis.innerHTML += `
        <p>
          ${up.ime} (${up.email}, ${up.starost})
          <button class="izbrisi" data-indeks="${i}">🗑️ Izbriši</button>
        </p>`;
		});

		// Dodaj event listenerje na nove gumbe
		document.querySelectorAll(".izbrisi").forEach((gumb) => {
			gumb.addEventListener("click", (e) => {
				const indeks = e.target.dataset.indeks;
				const shrani = JSON.parse(localStorage.getItem("uporabniki"));
				shrani.splice(indeks, 1);
				localStorage.setItem("uporabniki", JSON.stringify(shrani));
				prikaziUporabnike(); // osveži prikaz
			});
		});
	}
}

// 🟢 Ob nalaganju
document.addEventListener("DOMContentLoaded", prikaziUporabnike);

// 🟢 Ob kliku "Pošlji"
posljiBtn.addEventListener("click", () => {
	const ime = document.getElementById("ime").value.trim();
	const email = document.getElementById("email").value.trim();
	const starost = Number(document.getElementById("starost").value.trim());

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

	const novUporabnik = { ime, email, starost };
	const shrani = localStorage.getItem("uporabniki");
	const uporabniki = shrani ? JSON.parse(shrani) : [];

	uporabniki.push(novUporabnik);
	localStorage.setItem("uporabniki", JSON.stringify(uporabniki));

	prikaziUporabnike(); // osveži prikaz
});
