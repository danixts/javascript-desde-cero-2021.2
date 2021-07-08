class Singleton {
    static instancia;
    constructor(number = 0) {
      if (!!Singleton.instancia) {
        return Singleton.instancia;
      }
      Singleton.instancia = this;
      this.number = number;
    }
  
    print() {
      console.log(`El numero es: ${this.number}`);
    }
    sumar(a) {
      console.log(`La suma es: ${this.number + a}`);
    }
  }
  
  const number1 = new Singleton(1);
  const number2 = new Singleton(6);
  const number3 = new Singleton(9);
  
  number1.print();
  number2.print();
  number3.print();
  
  number1.sumar(20);
  number2.sumar(30);
  number3.sumar(50);
  