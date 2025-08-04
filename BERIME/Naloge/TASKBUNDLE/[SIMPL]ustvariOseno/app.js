class Oseba {
	constructor(ime, starost, spol) {
		this.ime = ime;
		this.starost = starost;
		this.spol = spol;
	}
}

const seznamOseb = [];

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("osebaForm");

	// preberi lokalno shranjene osebe
	const shranjene = JSON.parse(localStorage.getItem("osebe"));
	if (shranjene) {
		shranjene.forEach((o) => seznamOseb.push(o));
		prikaziOsebe();
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const ime = document.getElementById("ime").value.trim();
		const starost = document.getElementById("starost").value;
		const spol = document.getElementById("spol").value;

		if (!/^[A-ZČŠŽ][a-zčšžćđ]{1,}$/i.test(ime)) {
			prikaziOpozorilo("❌ Neveljavno ime!");
			return;
		}

		const nova = new Oseba(ime, Number(starost), spol);
		seznamOseb.push(nova);
		localStorage.setItem("osebe", JSON.stringify(seznamOseb));
		prikaziOsebe();
		prikaziOpozorilo("✅ Oseba uspešno dodana!", "uspeh");
		form.reset();
	});
});

function prikaziOsebe() {
	const el = document.getElementById("izpisOseb");

	if (seznamOseb.length === 0) {
		el.innerHTML = "<p>Ni oseb za prikaz.</p>";
		return;
	}

	let html = "<ul>";
	seznamOseb.forEach((o) => {
		html += `<li>${o.ime} (${o.starost} let, ${o.spol})</li>`;
	});
	html += "</ul>";

	el.innerHTML = html;
}

function prikaziOpozorilo(besedilo, tip = "napaka") {
	const el = document.getElementById("opozorilo");
	el.textContent = besedilo;
	el.className = `opozorilo ${tip}`;
	setTimeout(() => el.classList.remove("uspeh", "napaka"), 3000);
}
