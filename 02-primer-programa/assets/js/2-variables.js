"use strict";

// const | let | var
// const express = require("express");
const name = "Goku";
const PI = 3.1416;

// name = "Vegeta";
document.write(name);
document.write(PI);

// Conjunto de reglas para variables
// const 1name = "Daniel"
// const !#%&/ = "No se debe hacer"
// const name-age = "Name age"

const _ = "Guion";
const $ = "Dollar";

// const delete = "delete"

{
  let fruta = "Kiwi";
  if (true) {
    fruta = "Papaya";
    console.log("Fruta", fruta, "🚀");
  } else {
    console.log("FALSO");
  }
  fruta = "Coco modificado";
  console.log(fruta);
}

const tipo = "Auto",
  marca = "Toyota";

// const tipo = "Auto";
// const marca = "Toyota";

console.log(tipo, marca);
console.log("FIN");
