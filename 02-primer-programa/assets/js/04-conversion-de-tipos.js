// string to number
let number = "Cadena";

// > NaN
console.log("VAR STRING TO NUMBER", number, "TYPE=", typeof number);

// > number
number = "12.99";
console.log(
  "VAR STRING TO NUMBER",
  Number(number),
  "TYPE=",
  typeof Number(number)
);

// number to string
number = 1000.892929;
console.log(
  "VAR NUMBER TO STRING",
  String(number),
  "TYPE=",
  typeof String(number)
);

// boolean to number
number = true;
console.log(
  "VAR BOOLEAN TO NUMBER",
  Number(number),
  "TYPE=",
  typeof Number(number)
);

// TRANSFORMACION BOOLEANA
let cadena = "Vegeta"
// cadena = ""
// cadena = " "
// cadena = 1
console.log(
  "VAR STRING TO BOOLEAN",
  Boolean(cadena),
  "TYPE=",
  typeof Boolean(cadena)
);

// null | undefined | NaN -> false
let value = null

console.log(
  "VAR NULL TO BOOLEAN",
  Boolean(value),
  "TYPE=",
  typeof Boolean(value)
);


number = "99.78"
console.log("STRING A NUMBER", parseInt(number), typeof parseInt(number))
console.log("STRING A FLOAT", parseFloat(number), typeof parseFloat(number))

number = 100.78 
console.log("NUMBER TO STRING", number.toString(), typeof number.toString())