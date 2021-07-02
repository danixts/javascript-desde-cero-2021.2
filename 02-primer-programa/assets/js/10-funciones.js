// function printName() {
//   console.log("Tu nombre es Daniel");
// }

function printName(_name) {
  console.log(`Tu nombre es ${_name}`);
}

function suma(a, b) {
  return (a * 2) / b;
}

const result = suma(20, 50);

console.log(typeof result);
console.log(typeof suma);

for (let i = 1; i <= 5; i++) {
  console.log(suma(i, i * i));
}

// 6! = 1*2*3*4*5*6

function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log("7!", factorial(7));
console.log("10!", factorial(10));
console.log("3!", factorial(3));
console.log("8!", factorial(8));

function getProtocole(protocolo) {
  if (protocolo === "HTTP") {
    return "El sitio es vulnerable";
  }
  if (protocolo === "HTTPS") {
    return "El sitio es seguro";
  }
  if (protocolo === "SSH") {
    return "Super ADMIN en servidor";
  }
  if (protocolo) {
    return "NO ENCONTRADO";
  }
}

const PROTOCOLO = "HTTPS";
console.log(getProtocole(PROTOCOLO));

function isShow(value = false) {
  if (typeof value === "boolean" && value) {
    return "ES VISISBLE";
  }
  return `Valor= ${value}, el tipo es ${typeof value}`;
}

const restar = function (a, b) {
  return a - b;
};

console.log(restar(4, 5), typeof restar);

// Generar la seria de numeros primos
// 2,3,5,7,..... ->
// const primo = function(n){
// const count = 2
// return primo
// }
// n = 5; 2,3,5,7,11
