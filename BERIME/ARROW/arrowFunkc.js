// 🧠 Kaj je anonimna funkcija?
// Anonimna funkcija je funkcija brez imena. Običajno jo shranimo v spremenljivko ali podamo kot argument drugi funkciji.

// 🔧 Osnovni primer:
// javascript
// Kopiraj
// Uredi
const pozdravi = function() {
  console.log("Živjo!");
};

pozdravi(); // izpiše: Živjo!

// Tukaj imamo funkcijo, brez imena, ki je shranjena v spremenljivko pozdravi.

// ⚡ Isto z "arrow function" (sodobnejši zapis):
// javascript
// Kopiraj
// Uredi
const pozdrav = () => {
  console.log("Živjo!");
};


const sestej = function(a, b) {
    return a + b;
  };
  
  console.log(sestej(3, 4)); // 7
//   Enako kot arrow funkcija:
  
//   javascript
//   Kopiraj
//   Uredi
  const sestejj = (a, b) => a + b;
//   👉 Če imaš en sam izraz, lahko izpustiš {} in return.
  
//   🛠️ Uporaba kot argument:
//   Anonimne funkcije se pogosto uporabljajo v metodah kot map, filter, forEach, setTimeout itd.
  
//   Primer z setTimeout:
//   javascript
//   Kopiraj
//   Uredi
  setTimeout(function() {
    console.log("To se izvede po 1 sekundi.");
  }, 1000);

//   Z arrow funkcijo:
  
//   javascript
//   Kopiraj
 
  setTimeout(() => {
    console.log("To se izvede po 1 sekundi.");
  }, 1000);
//   🎯 Zakaj uporabljati anonimne funkcije?
//   Ko funkcijo potrebuješ le enkrat.
  
//   Ko želiš bolj kompakten zapis.
  
//   Ko hočeš funkcijo kot podatkovni objekt (npr. callback).