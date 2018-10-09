class Ave {
  volar() {
    console.log('Yo puedo Volar');
  }
}

class Paloma extends Ave {
  constructor() {
    super()
  }
}

class Pinguino extends Ave {
  constructor() {
    super()
  }
}

let palom = new Paloma();
let pingui = new Pinguino();

palom.volar();
pingui.volar();