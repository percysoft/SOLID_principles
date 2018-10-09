abstract class Instrumeto {
    abstract tocar():any;
}

class Guitarra extends Instrumeto {
    tocar() {
    }
}

class GuitarraElectrica extends Instrumeto {
    conectar() {
    }
    tocar() {
    }
}

class Bajo extends Instrumeto {
    conectar() {
        
    }
    tocar() {   
    }
}
class Violin extends Instrumeto {
    conectar() {
        
    }
    tocar() {     
    }
}