const obj = {
    nombre: "Goku",
    isShow: true,
    edad: 27,
    //   imprimirNombre: function () {
    //     console.log("El nombre es", this.nombre);
    //   },
    juego: {
      nombre: "DBZ F",
      dificultad: {
        media: true,
        alta: false,
        low: false,
      },
      estrellas: 5,
    },
    imprimirNombre: () => {
      console.log("El nombre es", obj["nombre"]);
    },
  };
  
  console.log("VAR OBJETO=", obj, "TYPE=", typeof obj);
  
  console.log("FORMA #1");
  // Forma #1
  console.log("El nombre es", obj["nombre"]);
  console.log("Es visible", obj["isShow"] ? "SI" : "NO");
  console.log("La edad es", obj["edad"]);
  console.log("IMPRIME", typeof obj["imprimirNombre"]);
  obj["imprimirNombre"]();
  
  console.log("FORMA #2");
  // Forma #2
  console.log("El nombre es", obj.nombre);
  console.log("Es visible", obj.isShow ? "SI" : "NO");
  console.log("La edad es", obj.edad);
  console.log("IMPRIME", typeof obj.imprimirNombre);
  obj.imprimirNombre();
  
  const data = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  
  console.log(data.userId);
  console.log(data.title);
  console.log(data.completed);
  
  console.log("EL JUEGO ES", obj.juego.nombre);
  console.log("LA DIFICULTAD ES", obj.juego.dificultad.media);
  const estrellas = obj.juego.estrellas === 5 ? "ES EXELENTE" : "ES BUENO";
  console.log("ESTRELLAS DEL JUEGO", estrellas);
  
  const producto1 = {
    nombre: "Sandia",
    precio: 10,
  };
  
  const producto2 = {
    nombre: "Sandia",
    precio: 10,
  };
  
  const producto3 = producto1
  
  console.log(producto1 === producto2);
  console.log(producto3 === producto1);
  