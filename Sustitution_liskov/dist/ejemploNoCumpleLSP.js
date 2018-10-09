"use strict";
class Vehiculo {
}
class Moto extends Vehiculo {
    constructor() {
        super();
        this.ObtenerNumLicencia = () => {
            const numLicencia = 'AZ26';
            return numLicencia;
        };
    }
    calcularImpuesto() {
        return this.ObtenerNumLicencia();
    }
}
class Coche extends Vehiculo {
    constructor() {
        super();
        this.ObtenerMatricula = () => {
            const numMatricula = 'fgu63';
            return numMatricula;
        };
    }
    calcularImpuesto() {
        return this.ObtenerMatricula();
    }
}
class Impuestos {
    constructor() {
        this.ServicioCalculoImpuestos = (type, vehiculo) => {
            return type;
        };
        this.CalcularImpuesto = (vehiculo) => {
            // let  matricula;
            // if (vehiculo.ObtenerMatricula) {
            //     matricula = vehiculo.ObtenerMatricula();
            // }
            // if (vehiculo.ObtenerNumLicencia) {
            //     matricula = vehiculo.ObtenerNumLicencia();
            // }
            let matricula = vehiculo.calcularImpuesto();
            return this.ServicioCalculoImpuestos(matricula, vehiculo.cilindrada);
        };
    }
}
let imp = new Impuestos();
let coche = new Coche();
let moto = new Moto();
console.log(imp.CalcularImpuesto(coche), 'rpta');
