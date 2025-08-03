/*export*/ class Oseba {
	constructor(ime, starost, spol) {
		this.ime = ime;
		this.starost = starost;
		this.spol = spol;
	}
}

/*export*/ function vpisiOsebo(ime, starost, spol) {
	//  new Oseba(ime, starost, spol) // Ustvariš, ampak izgine
	// 1. Preveri ime: ne prazno + vsebuje samo črke (lahko z šumniki) + začetnica
	const regexIme = /^[A-ZČŠŽ][a-zčšžćđ]{1,20}$/i;
	if (typeof ime !== "string" || !regexIme.test(ime.trim())) {
		console.warn("Neveljavno ime.");
		return null;
	}

	// 2. Preveri starost: številka med 15 in 105
	const starostNum = Number(starost);
	if (isNaN(starostNum) || starostNum < 15 || starostNum > 105) {
		console.warn("Neveljavna starost.");
		return null;
	}

	// 3. Preveri spol: dovoljene vrednosti
	const dovoljeniSpoli = ["moški", "ženska", "ni podatka"];
	if (!dovoljeniSpoli.includes(spol)) {
		console.warn("Neveljaven spol.");
		return null;
	}
	////shrani v localStorage
	return new Oseba(ime, starost, spol);
}
console.log(vpisiOsebo("Kristijan", 41, "moški")); // undefined

/*export*/ const osebe = [
	new Oseba("Ana", 25, "ženska"),
	new Oseba("Miha", 32, "moški"),
	new Oseba("Tina", 19, "ženska"),
	new Oseba("Boris", 44, "moški"),
	new Oseba("Eva", 17, "ženska"),
];

// function analiza(osebe) {
//     class osebe extends Oseba {
//         constructor(ime, starost, spol) {
//             super(ime, starost, spol)
//         }
//     }
//     return osebe
// }
// console.log(analiza("Ana"))

// ⚠️ Uporabljaš isto ime za razred in parameter(osebe).
// To povzroči konflikt.

// 🔄 Razred osebe znotraj funkcije nima pomena tukaj — ti želiš analizirati array oseb, ne ustvarjati podrazred.

// 🧪 console.log(analiza("Ana")) – funkcija pričakuje array oseb, ne en string "Ana".

function analiza(osebe) {
	const statistika = {
		povprecnaStarost: 0,
		steviloMoskih: 0,
		steviloZensk: 0,
		polnoletni: [],
	};

	if (osebe.length === 0) return statistika;

	const vsotaStarosti = osebe.reduce((vsota, oseba) => {
		// if (oseba.spol === "moški") statistika.steviloMoskih++;
		// if (oseba.spol === "ženska") statistika.steviloZensk++;
		oseba.spol === "moški"
			? statistika.steviloMoskih++
			: statistika.steviloZensk++;
		oseba.starost >= 18 ? statistika.polnoletni.push(oseba.ime) : null;
		// Alternativa (če ti je bolj pregledno):

		// oseba.starost >= 18 && statistika.polnoletni.push(oseba.ime);
		// Ta zapis uporablja && kot bližnjico:

		// če je pogoj resničen, izvede desni del

		return vsota + oseba.starost;
	}, 0);

	statistika.povprecnaStarost = vsotaStarosti / osebe.length;
	return statistika;
}

console.log(analiza(osebe));
