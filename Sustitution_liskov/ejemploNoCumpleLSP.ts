abstract class Vehiculo {
    public marca?: string;
    public modelo?: string;
    public cilindrada?: number;
    abstract calcularImpuesto(): string;
}

class Moto extends Vehiculo
{
    constructor() {
        super()
    }
    public ObtenerNumLicencia = () => {
        const numLicencia = 'AZ26';
        return numLicencia;
    }
    calcularImpuesto():string {
        return this.ObtenerNumLicencia();
    }
}
 
class Coche extends Vehiculo
{
    constructor() {
        super()
    }
    public ObtenerMatricula = () => {
        const numMatricula = 'fgu63';
        
        return numMatricula;
    }
    calcularImpuesto():string {
        return this.ObtenerMatricula();
    }
}
 
class Impuestos
{
    ServicioCalculoImpuestos = (type:any, vehiculo:any) => {
        return type;
    }
    CalcularImpuesto = (vehiculo:any) => {
        // let  matricula;
        // if (vehiculo.ObtenerMatricula) {
        //     matricula = vehiculo.ObtenerMatricula();
        // }
        // if (vehiculo.ObtenerNumLicencia) {
        //     matricula = vehiculo.ObtenerNumLicencia();
        // }
        let  matricula = vehiculo.calcularImpuesto();
        return this.ServicioCalculoImpuestos(matricula, vehiculo.cilindrada);
    }
}

let imp = new Impuestos();
let coche = new Coche();
let moto = new Moto();
console.log(imp.CalcularImpuesto(coche), 'rpta');


