const p = document.querySelector("#hola"); // para id # | class .
console.log(p);
p.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, accusamus!";

document.body.querySelectorAll("h1")[1].textContent = "Desde el archivo";

console.log(document.head.querySelectorAll("link"));

// forma correcta de selecionar ids
const grid = document.getElementById("grid");

const title = grid.querySelector(".bg-red-200").querySelector("p");
title.textContent = "texto modificado";

const lista = grid.querySelectorAll("div");

lista.forEach((el,index) => {
    el.querySelector("p").textContent = `TEXTO ${index + 1}`
    el.querySelector("p").style.color = "green"
    el.querySelector("p").style.backgroundColor = "purple"
})