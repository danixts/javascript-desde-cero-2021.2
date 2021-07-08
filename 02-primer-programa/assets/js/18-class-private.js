// # > private
class Forma {
    #area = 0;
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
      this.#area = this.base * this.altura;
    }
  
    printArea() {
      console.log("El area es:", this.#area);
    }
  }
  
  const cuadrado = new Forma(2, 2);
  cuadrado.printArea();
  