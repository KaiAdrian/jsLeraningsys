// // Odlično vprašanje! V JavaScriptu imata tako Array.prototype.map() kot Array.prototype.forEach() pomembno vlogo, vendar služita različnim namenom. Tukaj je razlika jasno prikazana:

// // 🔹 forEach()
// // Namen: Izvede neko funkcijo na vsakem elementu arraya.

// Ne vrača novega arraya (vrača undefined).

// Uporabljaš ga, kadar želiš nekaj narediti, npr. prikazati, zapisati, spremeniti stanje, itd.

// javascript
// Kopiraj
// Uredi
const stevila = [1, 2, 3];

stevila.forEach((x) => {
	console.log(x * 2); // Izpiše: 2, 4, 6
});

// Rezultat: undefined
// 🔹 map()
// Namen: Izvede funkcijo na vsakem elementu in vrne nov array z rezultati.

// Ne spreminja originalnega arraya.

// Uporabljaš ga, kadar želiš ustvariti nov array iz obstoječega.

// javascript
// Kopiraj
// Uredi
const stevilaII = [1, 2, 3];

const podvojena = stevilaII.map((x) => x * 2);
console.log(podvojena); // [2, 4, 6]
// 🟡 Primer: Razlika v rabi
// javascript
// Kopiraj
// Uredi
const imena = ["Ana", "Boris", "Cene"];

// forEach – samo izpis
imena.forEach((ime) => {
	console.log("Pozdravljen, " + ime);
});

// map – ustvarimo nov array z dolžinami imen
const dolzine = imena.map((ime) => ime.length);
console.log(dolzine); // [3, 5, 4]

// ✅ Kdaj uporabiti map:
// Ko potrebuješ nov seznam (spremenjenih) vrednosti.

// ✅ Kdaj uporabiti forEach:
// Ko želiš nekaj izvesti, npr. prikazati, shraniti v localStorage, pošiljati podatke...
