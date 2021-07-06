// && operador (and o y)
console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);

/* 
    { isShow && <Modal/> }
*/

let anio = 2021;
let mes = "Julio";
let dia = 1;

if (anio === 2021 && mes === "Julio") {
  console.log(`Año es ${anio} del mes ${mes}`);
} else {
  console.log("Error en datos");
}

// || -> Operador (or o o)
console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);

// const PORT = process.env.PORT || '3000'
// console.log(PORT)

mes = "Agosto"
dia = 2
// anio = 2022

const mensaje =
  anio === 2021 || dia === 1 || mes === "Julio"
    ? "SI ES EL AÑO ACTUAL Y MES ACTUAL"
    : "ERROR!!";
console.log(mensaje);

mes = "Julio"
const mesActual = mes === 'Julio' || "Diciembre"
console.log(mesActual)
if(typeof mesActual === 'boolean'){
    console.log("Si es Julio 🚀")
}

const _undefined = undefined || 'ALGUN VALOR'
console.log(_undefined)


if((anio === 2021 && mes === 'Agosto') || dia === 2 ){
    console.log(`Año es ${anio}, el mes es ${mes}`)
}else{
    console.log("Error!!")
}