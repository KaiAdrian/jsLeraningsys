// break prepreči, da bi program nadaljeval izvajanje naslednjih case blokov.

// default se izvede, če noben case ne ustreza.

// Kdaj raje NE uporabiti switch:
// Če primerjaš različne spremenljivke ali pogoje → uporabi if.

// Če imaš zelo zapleteno logiko v pogojih → if je bolj fleksibilen.

let tipZvoka = "distortion";

if (tipZvoka === "clean") {
  console.log("Uporabi čisti kanal.");
} else if (tipZvoka === "crunch") {
  console.log("Rahlo popačenje, idealno za rock.");
} else if (tipZvoka === "distortion") {
  console.log("Močno popačenje, super za metal.");
} else {
  console.log("Neznan tip zvoka.");
}

let tipZvokaII = "distortion";

switch (tipZvokaII) {
  case "clean":
    console.log("Uporabi čisti kanal.");
    break;
  case "crunch":
    console.log("Rahlo popačenje, idealno za rock.");
    break;
  case "distortion":
    console.log("Močno popačenje, super za metal.");
    break;
  default:
    console.log("Neznan tip zvoka.");
}
// ✅ Prednosti switch v tem primeru:

// Lažje berljivo, ko imaš več možnosti za eno spremenljivko.

// Vsaka možnost (case) je jasno ločena.

let dan = "sobota";

switch (dan) {
  case "ponedeljek":
  case "torek":
  case "sreda":
  case "četrtek":
  case "petek":
    console.log("Delovni dan.");
    break;

  case "sobota":
  case "nedelja":
    console.log("Vikend!");
    break;

  default:
    console.log("Neveljaven dan.");
}
// ✅ Zakaj je to uporabno:

// Koda je kratka in pregledna, ker več vrednosti vodi do enakega rezultata.

// Ni potrebe po pisanju istega console.log() večkrat.

