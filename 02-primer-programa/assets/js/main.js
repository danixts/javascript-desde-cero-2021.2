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
