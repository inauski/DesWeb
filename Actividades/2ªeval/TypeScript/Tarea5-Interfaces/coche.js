//Implementamos la interfaz
var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        //Valores por defecto
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (c) {
        this.color = c;
    };
    //Visibilidad
    //Los protected solo se pueden acceder desde la clase que los define o desde cualquier clase que herede de esta
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
//Objetos creados de coche
var cGenerico = new Coche();
var c = new Coche("Ferrari"); //si no pasamos parametro el modelo es el escrito por defecto
var c1 = new Coche();
var c2 = new Coche();
//Le asignamos colores
c.setColor("ROJO");
c1.setColor("AZUL");
c2.setColor("VERDE");
//Subimos la velocidad del coche 1-->c a 3 y despues la bajamos (con frenar)
cGenerico.acelerar(); //no se puede llamar a acelerar al ser protected
cGenerico.acelerar();
cGenerico.acelerar();
//Los escribrimos en consola obteniendo el color con getColor
console.log("El color del coche 1 es: " + c.getColor());
console.log("El color del coche 2 es: " + c1.getColor());
console.log("El color del coche 3 es: " + c2.getColor());
//Lo mismo con la velocidad
console.log("La velocidad del coche 1 es: " + cGenerico.getVelocidad());
cGenerico.frenar();
console.log("La velocidad del coche 1 despues de frenar es: " + cGenerico.getVelocidad());
console.log("El modelo del coche1 es: " + c.getModelo());
console.log("El modelo del coche generico es: " + cGenerico.getModelo());
