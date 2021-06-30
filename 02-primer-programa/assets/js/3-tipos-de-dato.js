// ===== string
const _name = "Goku";
const _number = "1234";
console.log("VAR NAME=", typeof _name);
console.log("VAR NUMBER=", typeof _name);
// console.log(typeof(_name));

// ===== number
const _amount = 12.99;
const _price = 100000;
console.log("VAR AMOUNT=", typeof _amount);
console.log("VAR PRICE=", typeof _price);
const _inf = 1 / 0;
console.log("VAR INFINITY", _inf, "TYPE=", typeof _inf);
const _cad = "cad" / 10;
// const _cad2 = "cad2" + 1;
console.log("VAR CAD", _cad, "TYPE=", typeof _cad);
// console.log("VAR CAD", _cad2, "TYPE=", typeof _cad2);

const _numberLarge = 9999999999999999;

console.log("NUMBER LARGE", _numberLarge, "TYPE", typeof _numberLarge);

// const _number = 1000000000;
const _numberM = 1_000_000_000;
console.log("NUMBER M", _numberM, "TYPE", typeof _numberM);

// ===== bigint
const bigNumber = 99999999999999999999999999999n;
console.log("VAR BIGNUMBER=", bigNumber, "TYPE=", typeof bigNumber);

// ===== boolean
const isShow = true; // false | true
console.log("VAR IS_SHOW=", isShow, "TYPE=", typeof isShow);

// ===== null
const isNull = null;
console.log("VAR IS_NULL=", isNull, "TYPE=", typeof isNull);

// ===== undefined
const isUndefined = undefined;
console.log("VAR IS_UNDEFINED=", isUndefined, "TYPE=", typeof isUndefined);

// const isTest;
// console.log("VAR IS_TEST=", isTest, "TYPE=", typeof isTest);

// ===== object
// {
//    key: value,
//    key_1: value_1
// }

const _objecto = {
  name: "Goku",
  isShow: true,
  age: 27,
};

console.log("VAR OBJETO=", _objecto, "TYPE=", typeof _objecto);

// symbol --- INVESTIGAR
