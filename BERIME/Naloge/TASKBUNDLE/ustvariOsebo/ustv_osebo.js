document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const izpis = document.getElementById("izpisOseb");

	// Preberi že shranjene osebe iz localStorage
	const shranjene = JSON.parse(localStorage.getItem("osebe"));
	if (shranjene) {
		shranjene.forEach((o) => seznamOseb.push(o));
		prikaziOsebe();
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const ime = document.getElementById("ime").value.trim();
		const starost = document.getElementById("starost").value;
		const spol = document.getElementById("spol").value;

		const rezultat = vpisiOsebo(ime, starost, spol);

		if (typeof rezultat === "string") {
			// rezultat je sporočilo o napaki
			prikaziOpozorilo(`❌ ${rezultat}`, "napaka");
			return;
		}
		shraniOsebe(); // <--- shrani v localStorage!
		prikaziOsebe(); // <--- osveži izpis
		prikaziOpozorilo("✅ Oseba uspešno dodana!", "uspeh");
		form.reset(); // <--- (neobvezno) počisti obrazec
	});
	function prikaziOpozorilo(besedilo, tip = "napaka") {
		const el = document.getElementById("opozorilo");

		el.textContent = besedilo;
		el.classList.remove("uspeh", "napaka", "prikazi");
		el.classList.add(tip, "prikazi");

		setTimeout(() => {
			el.classList.remove("prikazi");
		}, 3000);
	}
});

function prikaziOsebe() {
	const izpis = document.getElementById("izpisOseb");

	if (seznamOseb.length === 0) {
		izpis.innerHTML = "<p>Ni oseb za prikaz.</p>";
		return;
	}

	let html = "<ul>";
	seznamOseb.forEach((o) => {
		html += `<li>${o.ime} (${o.starost} let, ${o.spol})</li>`;
	});
	html += "</ul>";

	izpis.innerHTML = html;
}
