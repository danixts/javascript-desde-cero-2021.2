// if ( evalua expresiones boolenas ) {
//
// } else {
//
// }

let _name = "Goku";
if (_name === "Goku") {
  console.log("SI ES", _name);
} else {
  console.log("NO ES", _name);
}

_name = "Daniel"
if (_name === "Goku") {
  console.log("SI ES", _name);
} else if (_name === "Daniel") {
  console.log("SI ES", _name);
} else {
  console.log("NO EXISTE");
}

if(!null){
  console.log("ES NULO")
}


// (evalua expresiones boolenas) ? verdadero : falso
_name = "Daniel"
amount = 22
const price = _name === 'Daniel' ? 
              `${ amount === 20 ? `${_name} (${amount})` : `${_name}`} tiene una rebaja del 20%` 
              : 'No existe cliente'
              
console.log(price, "TIPO DE DATO", typeof price)


_name = "Daniel"
const ternarioMultiple = _name === 'Goku' ? `SI ES ${_name}` 
                          : _name === 'Daniel' ? `SI ES ${_name}` : "NO EXISTE"

document.write(`EL VALOR ${ternarioMultiple}`)