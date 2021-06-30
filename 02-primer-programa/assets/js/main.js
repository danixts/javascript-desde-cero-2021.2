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
