let a = 9
let b = 9

// IGUAL E IGUAL ESTRICTO
console.log("IGUAL a == b ->", a == b)

a = "9"
b = 9

console.log("IGUAL ESTRICTO a === b ->", a === b)
console.log("IGUAL 02 == 2 ->", "02" == 2)
console.log("IGUAL 02 === 2 ->", "02" === 2)

a = "hola"
b = "hola1"
console.log("IGUAL ESTRICTO a === b ->", a == b)

// DIFERENTE E DIFERENTE ESTRICTO
console.log("DIFERENTE ESTRICTO a != b ->", a != b)
console.log("DIFERENTE IGUAL ESTRICTO a !== b ->", a !== b)


// NEGADO
console.log("NEGAR", !(a === b) )

let show = false
show = !show
console.log(show)
show = !show
console.log(show)

// > | < | >= | <=

a = 8
b = 10

console.log("MAYOR a > b ->", a > b)
console.log("MENOR a < b ->", a < b)
console.log("MENOR IGUAL a <= b ->", a <= b)
console.log("MAYOR IGUAL a >= b ->", a >= b)

console.log("BOOLEANO CON STRING", '0' == false)
console.log("BOOLEANO CON STRING", '0' === false)