var Coche = /** @class */ (function () {
    function Coche() {
        this.velocidad = 0; //Hay q asignar los valores en el constructor
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (c) {
        this.color = c;
    };
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
var c = new Coche();
var c1 = new Coche();
var c2 = new Coche();
//Le asignamos colores
c.setColor("ROJO");
c1.setColor("AZUL");
c2.setColor("VERDE");
//Subimos la velocidad del coche 1-->c a 3 y despues la bajamos (con frenar)
c.acelerar();
c.acelerar();
c.acelerar();
c.frenar();
//Los escribrimos en consola obteniendo el color con getColor
console.log("El color del coche 1 es: " + c.getColor());
console.log("El color del coche 2 es: " + c1.getColor());
console.log("El color del coche 3 es: " + c2.getColor());
//Lo mismo con la velocidad
console.log("La velocidad del coche 1 es: " + c.getVelocidad());
console.log("La velocidad del coche 1 despues de frenar es: " + c.getVelocidad());
