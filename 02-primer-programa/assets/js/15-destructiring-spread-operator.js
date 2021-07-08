// desctructuring
// en objetos
const fruta = { id: 1, nombre: "Sandia", img: "🍉" };

console.log(
  `El id es ${fruta.id}, el nombre es ${fruta.nombre}, la imagen es ${fruta.img}`
);

const { img, id } = fruta;

console.log(`El id es ${id}, la imagen es ${img}`);

// en arrays
const letras = ["A", "B", fruta];

const [letraA, letraB, objeto, valorX] = letras;

console.log("Letra A =", letraA);
console.log("Letra B =", letraB);
console.log("OBJETO =", objeto);
console.log("Valor X =", valorX);

// React
// const [isShow, setIsShow] = useState(false)
//        variable, function

const calcularPrecio = (price) => {
  const discount = price - 0.1 * price;
  const priceDouble = (price * price).toFixed(2);
  const increment = (increment) => (price + increment).toFixed(2);
  return { discount, priceDouble, increment };
};

let price = 30.99;

// const [a,b,c] = calcularPrecio(price)
const { discount, priceDouble, increment } = calcularPrecio(price);

console.log(`El precio es ${price}, tiene un descuento de ${discount}`);
console.log(`El precio doble es ${priceDouble}`);
console.log(`El incremento es ${increment(30)}`);

// console.log(0.1 + 0.2 === 0.3);

// map destructuring
let frutasObj = [
  { id: 1, nombre: "Sandia", img: "🍉", price: 20 },
  { id: 2, nombre: "Kiwi", img: "🥝", price: 30 },
  { id: 3, nombre: "Manzana", img: "🍏", price: 50 },
  { id: 4, nombre: "Uva", img: "🍇", price: 60 },
  { id: 5, nombre: "Palta", img: "🥑", price: 90 },
];

// { id: 1, nombre: "Sandia", img: "🍉" },
// { id: id }
// const mapa = frutasObj.map(({ id, nombre }) => {
//   return { id, nombre };
// });

const mapa = frutasObj.map(({ id, nombre }) => ({ id, nombre }));

console.log(mapa);

const buscarId = (imagen) => frutasObj.findIndex(({ img }) => img === imagen);
console.log(buscarId("🍇"));

// filter
const filtrado = frutasObj.filter(({ price }) => price <= 50);
console.log(filtrado);

// PRACTICAR

// spread operador
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8];
const fusion = [...numeros1, ...numeros2];

console.log(fusion);

const sumar = (...args) => args.reduce((acc, cur) => acc + cur, 0);

console.log("LA SUMA ES", sumar(10, 30, 80, 40, 54, 100, 2000));

const obj1 = { id: 1, amount: 20, discount: 0.5 };
const obj2 = { currency: "BOB" };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// optional chaining | ?
frutasObj = [
  { id: 1, nombre: "Sandia", img: "🍉", price: 20 },
  { id: 2, nombre: "Kiwi", img: "🥝" },
  { id: 3, nombre: "Manzana", price: 50 },
  { id: 4, nombre: "Uva", img: "🍇", price: 60 },
  { id: 5, img: "🥑", price: 90 },
];
console.log("=======================");

frutasObj.forEach((fruta) => {
  console.log(`El nombre de la fruta es: ${
    fruta?.nombre || "No Tiene nombre"
  }, imagen de la fruta ${fruta?.img || "No Tiene nombre"}
    `);
});
