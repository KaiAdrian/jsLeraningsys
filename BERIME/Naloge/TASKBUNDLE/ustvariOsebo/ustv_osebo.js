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
	////POČISTI VSE!!!!
	document.getElementById("pocistiVse").addEventListener("click", () => {
		if (confirm("Ali res želiš izbrisati vse osebe?")) {
			seznamOseb.length = 0; // počisti array
			localStorage.removeItem("osebe"); // odstrani iz localStorage
			prikaziOsebe(); // osveži izpis
			prikaziOpozorilo("🧹 Seznam je bil izbrisan!", "uspeh");
		}
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

	let html =
		"<table><thead><tr><th>Ime</th><th>Starost</th><th>Spol</th><th>🗑</th></tr></thead><tbody>";
	seznamOseb.forEach((o, i) => {
		html += `
			<tr>
				<td>${o.ime}</td>
				<td>${o.starost}</td>
				<td>${o.spol}</td>
				<td><button onclick="izbrisiOsebo(${i})">❌</button></td>
			</tr>
		`;
	});
	html += "</tbody></table>";

	izpis.innerHTML = html;
}
function izbrisiOsebo(index) {
	seznamOseb.splice(index, 1); // odstrani iz arraya
	shraniOsebe(); // posodobi localStorage
	prikaziOsebe(); // osveži prikaz
}
