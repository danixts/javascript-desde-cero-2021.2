let a = 10;
let b = 20;

// + | - | / | % | *
console.log("a=", a, "b=", b);
console.log("a + b=", a + b);
console.log("a - b=", a - b);
console.log("a * b=", a * b);
console.log("a / b=", a / b);
console.log("a % b=", a % b);

a = 2;
b = 9;
console.log("a=", a, "b=", b);
console.log("a^b", Math.pow(a, b));
console.log("a^b", a ** b);

let _cad1 = "Hello";
let _cad2 = "World";

console.log("cad1=", _cad1, "cad2=", _cad2);
console.log("cad1 + cad2=", _cad1 + _cad2);
console.log("cad1 - cad2=", _cad1 - _cad2);
console.log("cad1 * cad2=", _cad1 * _cad2);
console.log("cad1 / cad2=", _cad1 / _cad2);
console.log("cad1 % cad2=", _cad1 % _cad2);
console.log("cad1 + cad2=", _cad1 + " " + _cad2);

const print = "a=" + a + ",b=" + b + " -> " + "a + b=" + (a + b);
console.log(print)

const templateString = `a=${a},b=${b} -> a + b=${a+b}`
console.log(templateString)

a = "2"
b = 3

console.log("Suma a+b", Number(a) + b)
console.log("true + true", true + true + true )
console.log("true + false", true + false )

// Operador unario +

a = "66.1231"
b = 45.675
console.log("type a+b=", typeof +a, typeof b)
console.log("a+b=", a + b)
console.log("unario a+b=", +a + b)
console.log("VALORES=", +"29.23212" + 20 + +"10")

let suma = 0
// suma = suma + 10
suma += 10
suma -= 20
suma /= 5
suma *= 20
suma %= 2
console.log(suma)


let count = 0
count = count + 1
// increment
console.log(count++)
console.log(count++)
console.log(count++)
console.log(count++)

count = 5
// decrement
console.log(count--)
console.log(count--)
console.log(count--)
console.log(count--)
console.log(count--)
console.log(count--)
console.log(count--)
console.log(count--)

count = 4
console.log("->>> ",count)
console.log(--count)
console.log(--count)
console.log(--count)
console.log(--count)


