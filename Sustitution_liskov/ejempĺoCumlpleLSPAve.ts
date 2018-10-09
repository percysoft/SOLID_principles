class Aves {
  volar() {
    console.log('Yo puedo Volar');
  }
}

class Palomas extends Ave {
  constructor() {
    super()
  }
}

class Pinguinos extends Ave {
  constructor() {
    super()
  }
  volar() {
    throw new Error("I don't fly rather I run");
  }
  correr() {
  }
}

let palomas = new Palomas();
let pinguis = new Pinguinos();

palomas.volar();
pinguis.volar();