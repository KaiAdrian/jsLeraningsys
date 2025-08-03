
// document.addEventListener("DOMContentLoaded", () => {
    
// });
////shrani v localStorage
localStorage.setItem("osebe", JSON.stringify(osebe));
const osebeSaved = localStorage.getItem("osebe", JSON.parse);
console.log(osebeSaved);