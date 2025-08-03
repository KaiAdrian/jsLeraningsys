/*export*/ class Oseba {
	constructor(ime, starost, spol) {
		this.ime = ime;
		this.starost = starost;
		this.spol = spol;
	}
}
const seznamOseb = []; //arej ///

///OPOZORILA///
let warning = document.getElementById("opozorilo");
///OPOZORILA///

function vpisiOsebo(ime, starost, spol) {
	const regexIme = /^[A-ZČŠŽ][a-zčšžćđ]{1,}$/i;
	if (!regexIme.test(ime.trim())) return "Neveljavno ime!";

	const starostNum = Number(starost);
	if (isNaN(starostNum) || starostNum < 15 || starostNum > 105)
		return "Neveljavna starost!";

	const dovoljeniSpoli = ["moški", "ženska", "ni podatka"];
	if (!dovoljeniSpoli.includes(spol)) return "Neveljaven spol!";

	const nova = new Oseba(ime.trim(), Number(starost), spol);
	seznamOseb.push(nova);
	return nova;
}
console.log("📦 trenutni seznamOseb:", seznamOseb);
function shraniOsebe() {
	localStorage.setItem("osebe", JSON.stringify(seznamOseb));
}
// console.log(vpisiOsebo("Kristijan", 41, "moški")); // undefined

/*export*/ const osebe = [
	new Oseba("Ana", 25, "ženska"),
	new Oseba("Miha", 32, "moški"),
	new Oseba("Tina", 19, "ženska"),
	new Oseba("Boris", 44, "moški"),
	new Oseba("Eva", 17, "ženska"),
];

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
