// Da, lahko izvedeš akumulacijo (npr. seštevanje vrednosti) z oboji, forEach() in map(), ampak z eno pomembno razliko:

// ✅ forEach() je namenjen stranskim učinkom (side effects):
// Lahko zgradiš vsoto, objekt, ali kaj drugega, vendar ne vrne novega arraya.

// javascript
// Kopiraj
// Uredi
const arr = [1, 2, 3, 4];
let vsota = 0;

arr.forEach(x => {
  vsota += x;
});

console.log("Vsota (forEach):", vsota); // 10
// ⚠️ map() vrne nov array, zato ni optimalen za akumulacijo:
// Lahko sicer v map() zgradiš zunanjo vsoto, vendar se to šteje kot "napačna uporaba" (map() naj bi samo transformiral array).

// javascript
// Kopiraj
// Uredi
const arej = [1, 2, 3, 4];
let vsotaa = 0;

const rezultat = arej.map(x => {
  vsotaa += x;
  return x * 2; // map() mora nekaj vrniti
});

console.log("Vsota (v map):", vsota);   // 10
console.log("Novi array:", rezultat);   // [2, 4, 6, 8]

// 🟨 To dela, a se pogosto svetuje, da za akumulacijo raje uporabiš forEach() ali še bolje:

// ✅ Priporočena rešitev: reduce()
// javascript
// Kopiraj
// Uredi
const arrrreyy = [1, 2, 3, 4];
const vsotaaaa = arrrreyy.reduce((acc, val) => acc + val, 0);
console.log("Vsota (reduce):", vsota); // 10