const main = document.querySelector(".main");
const btn_set_value = document.querySelector(".set-value");
const btn_clear = document.querySelector(".clear");

let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];


const randomColorBackground = () => {
	let randomColor = "#";

	for(let i = 0; i <= 5; i++) {
		randomColor += Math.floor(Math.random() * hex.length).toString(16);
	}

	return randomColor;
}

const createDivs = cuadricula => {

	let cuadrado = cuadricula * cuadricula;

	for(let i = 1; i <= cuadrado; i++) {
		let div = document.createElement("div");
		div.setAttribute("class", "divs");
		div.style.width = main.clientWidth / cuadricula + "px";
		div.style.height = main.clientHeight / cuadricula + "px";
		main.appendChild(div);

		div.addEventListener("mouseover", () => {
			div.style.background = randomColorBackground();
		})

		btn_clear.addEventListener("click", () => {
			while(main.hasChildNodes()) {
				main.removeChild(main.firstChild);
			}
			btn_set_value.removeAttribute("disabled");
		})
	}

}


btn_set_value.addEventListener("click", () => {
	let cuadricula = +prompt("Indica el número de cuadrícula (max 100)");

	if(cuadricula > 100 || cuadricula <= 0 || isNaN(cuadricula)) {
		alert("El máximo de la cuadricula es de 100!!!");
	}
	else {
		createDivs(cuadricula);
		btn_set_value.setAttribute("disabled", "");
	}

});
