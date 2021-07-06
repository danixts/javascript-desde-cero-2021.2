/* 
    Forma #1
    () => { code... }
    () => { return valor }
    const nombreFuncion = () => { code ... }
    const nombreFuncion = () => { return valor }
    const nombreFuncion = (parametros) => { return valor }
    
    Formo #2
    const nombreFuncion = () => valor
    
    React VueJS
*/

const printName = (_name) => {
    console.log(`Tu nombre es ${_name}`);
  };
  
  printName("Daniel");
  
  // const suma = (a,b) => {
  //    const resultado = a + b
  //    return resultado
  // }
  
  const suma = (a, b) => a + b;
  
  console.log(suma(10, 10));
  
  const factorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  };
  
  console.log("6!", factorial(6))
  console.log("7!", factorial(7))