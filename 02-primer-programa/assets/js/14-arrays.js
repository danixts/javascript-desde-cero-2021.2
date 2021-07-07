// Array
// const arr = []
// const arr = new Array()

const suma = (a, b) => a + b;

const arr = [
  1,
  23.3,
  true,
  false,
  suma,
  ["Hola", "Goku"],
  { id: "ABC", nombre: "Picolo" },
];

console.log(arr);
console.log(arr[4](2, 3));
console.log(arr[6]);

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [6, 7, 8];

console.log(arr2);
// push
arr2.push(9);
console.log(arr2);
// pop
arr2.pop();
arr2.pop();
console.log(arr2);

// shift
console.log("Elemento", arr3.shift());

// unshift
arr3.unshift();
console.log("Elemento", arr3);

const productos = [
  {
    precio: 10,
    nombre: "Uva",
  },
  {
    precio: 20,
    nombre: "Toronja",
  },
];

console.log(productos);
console.log(productos[1].precio);

// Forma #1 antigua
console.log("FOR OLD");
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let i = 0; i < letras.length; i++) {
  console.log(letras[i]);
}

console.log("FOR OF");
// for (let tipo(cualquier variable) of array)
for (let letra of letras) {
  console.log(letra);
}

console.log("FOR IN");
// for (let tipo(cualquier variable) in array)
for (let letra in letras) {
  console.log(letra);
}

// Array
// Array from
let frutas = Array.from("🥩🧀🥨🥓🍔🍕");
console.log(frutas);

// isArray
console.log(Array.isArray(frutas));

// concat
frutas = ["🍉", "🥑", "🥝", "🍏"];
const frutas1 = ["🍒", "🍇"];

console.log(frutas.concat(frutas1));

frutas = ["🍉", "🥑", "🥝", "🍏", "🍒", "🍇", "🍏", "🍏", "🍏"];

const frutasObj = [
  { id: 1, nombre: "Sandia", img: "🍉" },
  { id: 2, nombre: "Kiwi", img: "🥝" },
  { id: 3, nombre: "Manzana", img: "🍏" },
  { id: 4, nombre: "Uva", img: "🍇" },
  { id: 5, nombre: "Palta", img: "🥑" },
];

// const evaluaFrutas = function (fruta) {
//   return fruta.nombre === "Uva" || fruta.nombre === "Manzana";
// }

// const evaluaFrutas = (fruta) => fruta.nombre === "Uva" || fruta.nombre === "Manzana";
const evaluaFrutas = (fruta) => fruta === "🍏";

// filter
const filtrado = frutas.filter(evaluaFrutas);

console.log(filtrado);

// map
const mapa = frutasObj.map((fruta, index, array) => {
  // console.log(fruta, index, array);
  return {
    id: fruta.id,
    nombre: fruta.nombre.toUpperCase(),
    img: `🍇${fruta.img}`,
  };
});

console.log(mapa);

// { frutasObj.map(frutas => <Componente key={fruta.id} props={fruta} /> ) }

// forEach
let filter = [];
frutas.forEach((fruta, index) => {
  console.log(index, fruta);
  if (fruta === "🍏") {
    filter.push(fruta);
  }
});

console.log(filter);

// fill
// frutas.fill("🍉", 3, frutas.length);
frutas.fill("🍉");
console.log(frutas);

frutas = ["🍉", "🥑", "🥝", "🍏", "🍒", "🍇", "🍏", "🍏", "🍏"];

// find
const buscado = frutas.find((fruta) => fruta === "🍏");
console.log(buscado);

// indexOf
const indexOf = frutas.indexOf("🍏");
console.log(indexOf);

// findIndex
const findIndex = frutasObj.findIndex((fruta) => fruta.id === 4);
console.log(findIndex);

const buscarId = (img) => frutasObj.findIndex((fruta) => fruta.img === img);

console.log(buscarId("🍏"));

// reduce
const numbers = [1, 4, 5, 6, 2, 3, 4, 4, 2, 1, 2, 3];

let resultado = 0;
numbers.forEach((n) => {
  resultado += n;
});

console.log("Suma con FOR", resultado);

// const result = numbers.reduce((acc,cur) => {
//   console.log("Acumulador", acc)
//   console.log("Current", cur);
//   console.log("-------");
//   return acc + cur
// } , 0)

const carrito = [
  { id: "1", price: 50.5, discount: 0.2, qty: 4 },
  { id: "2", price: 60.1, discount: 0.1, qty: 8 },
  { id: "3", price: 23.5, discount: 0.1, qty: 5 },
  { id: "4", price: 29.99, discount: 0.1, qty: 1 },
  { id: "5", price: 120.99, discount: 0.1, qty: 9 },
];
// Mini TAREA
// De mi objeto carrito sacar el total
// del array multiplicar el precio(price) por cantidad(qty)
// (price * qty)

const result = numbers.reduce((acc, cur) => acc + cur, 0);

const multiplicar = frutasObj.reduce((acc, cur) => acc + cur.id, 0);

console.log("Suma REDUCE", result);
console.log("Multiplicar REDUCE frutasObj", multiplicar);

// reverse
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.reverse());

// split | join
const cad = "HOLA SOY GOKU";
const split = cad.split(" ");
console.log(split);

const join = split.join(" 🚀 ");
console.log(join);

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// btoa > string a base64 | atob > base64 a string
// JSON.stringify(obj) > object a string
// JSON.parse(cadena) > string a objeto

const getPayload = (jwt) => {
  const arrayJWT = jwt.split(".")[1];
  return JSON.parse(atob(arrayJWT)).name;
};

console.log(getPayload(jwt));

// ["mt-4", "bg-gray-500", "border-t-md"].includes("mt-4")
// includes
const include = numeros.includes(1);
console.log(include);

// splice | slice
frutas = ["🍉", "🥑", "🥝", "🍏", "🍒", "🍇", "🍏", "🍏", "🍏"];
console.log("NUMERO DE FRUTAS", frutas.length);
const frutasRango = frutas.splice(3, 5);
console.log("SPLICE", frutasRango);
console.log(frutas);
console.log("SLICE", frutas.slice(0, 2));
console.log("SLICE", frutas.slice(2, frutas.length));
console.log(frutas);

// some | every
frutas = ["🍉", "🍏", "🍒", "🍇"];

const some = frutas.some((fruta) => fruta === "🍏");
const every = frutas.every((fruta) => fruta === "🍏");

console.log("some", some);
console.log("every", every);

// sort
const _numeros = [2, 3, 423, 123, 675, 123, 98, 212, 231];

const _cad = ["1", "A", "a", "b", "c", "d", "e", "E", "g", "h", "M"];

console.log(_numeros.sort((a, b) => b - a));
console.log(_cad.sort((a, b) => a - b));
console.log(carrito.sort((a, b) => b.price - a.price));

// toString
console.log(_cad.toString());

//  copyWithin
frutas = ["🍉", "🍏", "🍒", "🍇"];
console.log(frutas.copyWithin(2, 0));

// flat
const _arr = [
  1,
  2,
  [3, 2],
  [23, 45],
  2,
  3,
  45,
  [231, 231, [231, 2, [2312, 232]]],
];
console.log(_arr.flat(3));
