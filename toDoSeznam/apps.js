// 1. Definiramo razred Task
class Task {
	constructor(text, prioriteta, done = false) {
		this.text = text;
		this.prioriteta = prioriteta; // 🎯 zdaj pravilno
		this.done = done;
	}

	toggleDone() {
		this.done = !this.done;
	}
}

// 2. Seznam vseh nalog
let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
	const vnos = document.getElementById("vnos");
	const dodaj = document.getElementById("dodaj");
	const prioriteta = document.getElementById("prioriteta");
	const seznam = document.getElementById("seznam");

	loadFromLocalStorage();
	renderTasks();

	dodaj.addEventListener("click", () => {
		if (vnos.value.trim() === "") return;

		const nova = new Task(vnos.value, prioriteta.value); // 🎯 tukaj pravilno pošljemo string
		tasks.push(nova);

		vnos.value = ""; // Počistimo vnosno polje
		saveToLocalStorage();
		renderTasks();
	});

	function renderTasks() {
		seznam.innerHTML = ""; // Počisti seznam

		tasks.forEach((task, index) => {
			const li = document.createElement("li");

			li.innerHTML = `
				<span class="${task.done ? "done" : ""}">
					${task.text} (${task.prioriteta})
				</span>
				<div>
					<button onclick="toggleTask(${index})">✔</button>
					<button onclick="removeTask(${index})">🗑</button>
				</div>
			`;
			seznam.appendChild(li);
		});
	}

	window.removeTask = (index) => {
		tasks.splice(index, 1);
		saveToLocalStorage();
		renderTasks();
	};

	window.toggleTask = (index) => {
		tasks[index].toggleDone();
		saveToLocalStorage();
		renderTasks();
	};

	function saveToLocalStorage() {
		localStorage.setItem("todo-tasks", JSON.stringify(tasks));
	}

	function loadFromLocalStorage() {
		const podatki = localStorage.getItem("todo-tasks");
		if (podatki) {
			const parsed = JSON.parse(podatki);

			tasks = parsed.map((obj) => {
				// 🎯 ključni popravek
				const task = new Task(obj.text, obj.prioriteta, obj.done);
				task.done = obj.done;
				return task;
			});
		}
	}
});
