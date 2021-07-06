// Number
const a = "999.99";

console.log("parseInt", parseInt(a));
console.log("parseFloat", parseFloat(a));

// toFixed
const b = 195.123456;
console.log("toFixed", b.toFixed(0));
console.log("toFixed", b.toFixed(2));
console.log("toFixed", b.toFixed(5));

// toExponential
const c = 1.123;
console.log("toExponential", c.toExponential(2));

const d = 138282828;
console.log("toString", d.toString("2"), typeof d.toString());
console.log("toString", d.toString(16), typeof d.toString());
console.log("toString", d.toString(8), typeof d.toString());

// Math
console.log("pow", Math.pow(2, 8));
console.log("sqrt", Math.sqrt(25));
console.log("PI", Math.PI);
console.log("E", Math.E);

console.log("MIN", Math.min(22, 1, 2, 3, 1, 676, 121, 4541, -2));
console.log("MAX", Math.max(4541, 22, 1, 2, 3, 1, 676, 121, -2));

console.log("RANDOM", Math.floor(Math.random() * 5 + 1));
console.log("RANDOM", Math.floor(Math.random() * 1000 + 100));

console.log("ROUND", Math.round(10.242));

console.log("ABS", Math.abs(10));
console.log("ABS", Math.abs(-10));

console.log("COS", Math.cos(1));
console.log("SIN", Math.sin(1));
console.log("TAN", Math.tan(1));

// Strings
const cad = "Hola soy Goku";

console.log("LENGTH", cad.length);
console.log("LENGTH", cad[cad.length - 1]);

console.log("\u{2766} 🖥");

console.log("VALOR X", String.fromCharCode(64));

let cad1 = "";

for (let i = 32; i <= 500; i++) {
  cad1 += String.fromCharCode(i) + " ";
}

let concat = "";
for (let i = 0; i < cad.length; i++) {
  concat += cad.charAt(i) === " " ? "@" : cad.charAt(i);
}
console.log(concat);

// Mini tarea #1
// HOLA SOY GOKU
// MINI TAREA
// UKOG YOS ALOH

// trim
const cad4 = "        Hola soy Goku        ";
//     EL MONTO ES DE JESUS
console.log(cad4);
console.log(cad4.trim());

const cad5 = "JavaScript, Vue.js, Vue.js, React.js , Svelte";

console.log(cad5.toUpperCase());
console.log(cad5.toLowerCase());

// Mini tarea #2
// IN -> daniel goku vegeta
// OUT -> Daniel Goku Vegeta

const index = cad5.indexOf("Vue"); // 0 longitud de la cadena | -1
console.log("INDEX CAD5", index);
if (index !== -1) {
  // substring(inicio, final)
  console.log(cad5.substring(index, cad5.length));
} else {
  console.log(cad5.substring(0, 10));
}
const indexLast = cad5.lastIndexOf("Vue");
console.log("INDEX LAST CAD5", indexLast);
console.log(cad5.substring(cad5.length, indexLast));

console.log("includes", cad5.includes("JavaScript"));
console.log("startsWith", cad5.startsWith("JavaScript"));
console.log("endsWith", cad5.endsWith("JavaScript"));

// slice
const cad6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("slice", cad6.slice(-8, -2));

const cad7 = "ABC"
console.log(cad7.repeat(4))