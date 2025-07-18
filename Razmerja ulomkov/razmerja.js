let stevc, imenovalc;


function dodaj() {
	let izpis;
	let ulomek = "";

	
	(stevc = Number(document.getElementById("input-stevec").value)),
		(imenovalc = Number(document.getElementById("input-imenovalec").value));
	if (isNaN(stevc) || isNaN(imenovalc)) {
		izpis = "Neveljavni vnos!";
	} else if (imenovalc === 0) {
		izpis = "Deljenje z ničlo ni dovoljeno!";
	} else {
		izpis = "Ulomek: ";
		ulomek = `${stevc} / ${imenovalc}`;
	}

	document.querySelector(
		".rezultat-container"
	).innerHTML = ` ${izpis}  ${ulomek}`;
}
function nsd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function okrajsajUlomek(stevc, imenovalc) {
    let d = nsd(stevc, imenovalc);
    console.log(`Okrajšani ulomek: ${stevc / d} / ${imenovalc / d}`);
}

okrajsajUlomek(stevc, imenovalc);
