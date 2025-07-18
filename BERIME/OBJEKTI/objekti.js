// 🧱 Kaj je objekt v JavaScriptu?
// Objekt je zbirka podatkov in funkcij (t.i. lastnosti in metode), ki jih lahko skupaj povežemo v eno enoto.

// 🔤 Primer:
// javascript
// Kopiraj
// Uredi
let oseba = {
	ime: "Tina",
	starost: 30,
	pozdravi: function () {
		console.log("Živjo, jaz sem " + this.ime);
	},
};

// 🧰 Kaj lahko počneš z objekti?
// ✅ 1. Dostopaš do podatkov:
// javascript
// Kopiraj
// Uredi
console.log(oseba.ime); // "Tina"
console.log(oseba["starost"]); // 30
// ✅ 2. Dodajaš ali spreminjaš lastnosti:
// javascript
// Kopiraj
// Uredi
oseba.priimek = "Novak";
oseba.starost = 31;
// ✅ 3. Brišeš lastnosti:
// javascript
// Kopiraj
// Uredi
delete oseba.priimek;

// 🔁 Loop po lastnostih objekta:
// javascript
// Kopiraj
// Uredi
for (let kljuc in oseba) {
	console.log(kljuc + ": " + oseba[kljuc]);
}

// ✅ 1. Kopiranje obstoječega objekta
// Če imaš objekt oseba, lahko ustvariš kopijo z:

// javascript
// Kopiraj
// Uredi
let oseba = {
	ime: "Tina",
	starost: 30,
};
let novaOseba = { ...oseba }; // "spread" operator

// ✅ 2. Ustvarjanje objekta z istim prototipom (prototypal inheritance)
// Če želiš ustvariti nov objekt, ki "deduje" od obstoječega, uporabiš:

// javascript
// Kopiraj
// Uredi
let oseba = {
	ime: "Tina",
	starost: 30,
};

let drugaOseba = Object.create(oseba);

console.log(drugaOseba.ime); // "Tina" (dedovano)

// ✅ 3. Funkcija za ustvarjanje novih oseb (t.i. "factory function")
// javascript
// Kopiraj
Uredi;
function ustvariOsebo(ime, starost) {
	return {
		ime,
		starost,
		pozdravi() {
			console.log("Živjo, sem " + this.ime);
		},
	};
}

let ana = ustvariOsebo("Ana", 25);
let luka = ustvariOsebo("Luka", 32);

// ✅ 4. Uporaba class (če greš v OOP stil):
// javascript
// Kopiraj
// Uredi
class Oseba {
	constructor(ime, starost) {
		this.ime = ime;
		this.starost = starost;
	}

	pozdravi() {
		console.log("Hej, sem " + this.ime);
	}
}

let eva = new Oseba("Eva", 28);

// 🧱 Kaj class omogoča:
// ✅ 1. Konstrukcija objektov
// Ustvariš predlogo, po kateri lahko izdelaš več objektov:

// javascript
// Kopiraj
// Uredi
class Avto {
	constructor(ime, barva) {
		this.ime = ime;
		this.barva = barva;
	}

	predstavi() {
		console.log("Sem " + this.ime + ", barva: " + this.barva);
	}
}

let mojAvto = new Avto("Golf", "modra");
mojAvto.predstavi(); // Sem Golf, barva: modra

// ✅ 2. Dedovanje (inheritance)
// Lahko ustvariš nove razrede, ki podedujejo funkcionalnost:

// javascript
// Kopiraj
// Uredi
class Vozilo {
	constructor(tip) {
		this.tip = tip;
	}

	zvok() {
		console.log("brum brum");
	}
}

class Avto extends Vozilo {
	constructor(ime) {
		super("avto");
		this.ime = ime;
	}

	predstavi() {
		console.log("Sem " + this.ime + " in sem " + this.tip);
	}
}

let audi = new Avto("Audi A4");
audi.zvok(); // brum brum
audi.predstavi(); // Sem Audi A4 in sem avto

//  Kaj je tukaj ključno?
// extends Oseba: razred Upokojenec podeduje vse iz Oseba

// super(ime, starost): pokliče konstruktor starševskega razreda

// Dodamo novo lastnost pokojnina in metodo prikazPokojnine()
