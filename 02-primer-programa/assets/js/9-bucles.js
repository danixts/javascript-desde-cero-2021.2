/* 
    for ( inicio; condicion; incremento ){
        code...
    }
*/

// Tabla de multiplicar de 5
for (let i = 1; i <= 10; i = i + 2) {
    console.log(`${i}x5 = ${i * 5}`);
  }
  
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`indice = ${i}`);
    }
  }
  
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 3; j++) {
      console.log(`ixj (${i},${j})`);
    }
  }
  
  /* 
     while(condicion){
         code...
     } 
  */
  let limite = 1;
  while (limite <= 10) {
    // console.log("Hola")
    console.log(`${limite}x11 = ${limite * 11}`);
    limite++;
  }
  
  limite = 1;
  while (limite <= 10) {
    if (limite % 2 === 1) {
      console.log(`indice = ${limite}`);
    }
    limite++;
  }
  
  // break
  
  limite = 1;
  while (limite <= 10) {
    if (limite === 4) {
      break;
    }
    console.log("Limite", limite);
    limite++;
  }
  
  /* 
      do {
          code ..
      } while(condicion)
  */
  
  limite = 1;
  do {
    if (limite % 2 === 1) {
      console.log("limite", limite);
    }
    limite++;
  } while (limite <= 10);
  
  /* 
      switch(valor){
          case: 'valor_x': --> if (valor === valor_x)
              code ....
              break;
          case: "valor_y": --> if (valor === valor_y)
              code...
              break;
          .    
          .
          .
          default:
              code...
              break;
      }
  */
  
  const PROTOCOLO = "HTTPS";
  
  switch (PROTOCOLO) {
    case "HTTP":
      console.log("El sitio es vulnerable");
      break;
    case "HTTPS":
      console.log("El sitio es seguro");
      break;
    case "SSH":
      console.log("Super ADMIN en servidor");
      break;
    default:
      console.log("NO ENCONTRADO");
      break;
  }
  
  switch (PROTOCOLO) {
    case "HTTPS":
    case "HTTP":
      console.log("El sitio es web");
      break;
    case "SSH":
      console.log("Super ADMIN en servidor");
      break;
    default:
      console.log("NO ENCONTRADO");
      break;
  }
  
  