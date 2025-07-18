// Odlično vprašanje! Če imaš Map (ali objekt) in te zanima, kateri ključi imajo določeno vrednost (npr. true, 100, "blblblba" itd.), lahko to preveriš s pomočjo metode .forEach() (za Map) ali z for...in (za objekt).

const mojeMape = new Map([
	["naloga1", true],
	["naloga2", false],
	["naloga3", true],
	["naloga4", 100],
	["naloga5", "blblblba"],
]);

// Poiščemo vse ključe, kjer je vrednost true
mojeMape.forEach((vrednost, ključ) => {
	if (vrednost === true) {
		console.log("Ključ z vrednostjo true:", ključ);
	}
});

//   Če želiš generično funkcijo:

function najdiKljucPoVrednosti(map, iskanaVrednost) {
	const zadetki = [];
	map.forEach((vrednost, ključ) => {
		if (vrednost === iskanaVrednost) {
			zadetki.push(ključ);
		}
	});
	return zadetki;
}

console.log(najdiKljucPoVrednosti(mojeMape, true)); // ["naloga1", "naloga3"]
console.log(najdiKljucPoVrednosti(mojeMape, 100)); // ["naloga4"]

// 🔸 Če imaš navaden objekt {}:

const mojObj = {
	naloga1: true,
	naloga2: false,
	naloga3: true,
	naloga4: 100,
	naloga5: "blblblba",
};

function najdiKljucPoVrednostiObj(obj, iskanaVrednost) {
	return Object.keys(obj).filter((ključ) => obj[ključ] === iskanaVrednost);
}

console.log(najdiKljucPoVrednostiObj(mojObj, true)); // ["naloga1", "naloga3"]
