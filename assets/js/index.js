import { Donut } from "./donut.js";
const donut = new Donut();

/** @type {HTMLDivElement} */
const container = document.getElementById("donut-container");
const el = document.createElement("pre");
el.id = "donut";
el.className = "pointer-events-none user-select-none";
container.appendChild(el);

/** @type {HTMLImageElement} */
const logo = document.querySelector(".logo");
logo.style.display = "none";

function loop() {
  el.innerHTML = donut.render();
  setTimeout(() => requestAnimationFrame(loop), 1000 / 30);
}
requestAnimationFrame(loop);
