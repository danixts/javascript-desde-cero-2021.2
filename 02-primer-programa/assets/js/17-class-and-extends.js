// Clases
class Personaje {
    static KI = 100;
    static get value() {
      return `TU KI ES DE ${Personaje.KI}`;
    }
    constructor(name = "Goku", planet = "Vegita") {
      this.name = name;
      this.planet = planet;
      Personaje.KI++;
    }
  
    get _planet() {
      return `${this.planet.toUpperCase()}`;
    }
  
    set setName(name) {
      this.name = name;
    }
  
    print() {
      console.log(`El nombre es ${this.uppercase()}, del planeta ${this.planet}`);
    }
  
    uppercase() {
      return this.name.toUpperCase();
    }
  }
  
  const Goku = new Personaje();
  const Vegeta = new Personaje("Vegeta", "Tierra");
  
  console.log(Personaje.KI);
  console.log(Personaje.value);
  console.log(Goku._planet);
  console.log(Goku._planet);
  Goku.print();
  Goku.setName = "Krilin";
  Goku.print();
  // console.log(typeof Goku);
  // console.log(Goku.uppercase());
  Vegeta.print();
  
  class Raza extends Personaje {
    constructor(name, planet, raza) {
      super(name, planet);
      this.raza = raza;
    }
    print() {
      console.log("****************************************");
      console.log(
        `Es planeta ${this._planet}, el personaje es ${this.name}, de la raza ${this.raza}`
      );
      console.log("****************************************");
    }
    print2() {
      super.print();
      console.log(`DE la raza ${this.raza}`)
    }
  }
  
  const Krilin = new Raza("Krilin", "Tierra", "Guerrero Z");
  
  Krilin.print();
  Krilin.setName = "Goku"
  Krilin.print2()
  