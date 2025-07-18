let child = 2;
function izpis() {
	const targetDiv = document.querySelector(".js-loop-div");

	// Ustvarimo nov paragraf (lahko tudi 'div')
	const noviElement = document.createElement("p");

	// Dodamo nekaj vsebine
	noviElement.textContent = child++;

	// Dodamo element v obstoječi div
	targetDiv.appendChild(noviElement);
}

// for (let j = 4; j <= 50; j *= 2){
//     console.log(j);
// }
function reset() {
	const targetDiv = document.querySelector(".js-loop-div");
	const paragraphs = targetDiv.querySelectorAll("p");
	const zadnji = paragraphs[paragraphs.length - 1];
	if (zadnji) {
		zadnji.remove();
	}
	// child--;
	child = Math.max(2, child - 1); // poskrbi, da ne gre pod 2 (če želiš)
}

function clearEmAll() {
	const nasDiv = document.querySelector(".js-loop-div");
	nasDiv.innerHTML = ""; // odstrani vso notranjost div-a
	child = 2;
}
