// closure
const contador = (function () {
    let count = 0;
    function increment() {
      return count++;
    }
    function decrement() {
      return count--;
    }
    function value() {
      return count;
    }
    return {
      increment,
      decrement,
    };
  })();
  
  const obj = {
    name: "Goku",
    planet: "Vegita",
    print() {
      console.log(`El nombre es ${this.name}, del planeta ${this.planet}`);
    },
  };
  
  const obj1 = {
    name: "Vegeta",
    planet: "Vegita",
    print() {
      console.log(`El nombre es ${this.name}, del planeta ${this.planet}`);
    },
  };
  
  obj.print();
  obj1.print();
  
  function Personaje(name, planet) {
    this.name = name;
    this.planet = planet;
  
    this.print = function () {
      console.log(`El nombre es ${this.name}, del planeta ${this.planet}`);
    };
  }
  
  const Goku = new Personaje("Goku","Vegita")
  const Vegeta = new Personaje("Vegeta","Vegita")
  Goku.print()
  Vegeta.print()
  
  // console.log(typeof Goku, typeof Vegeta);