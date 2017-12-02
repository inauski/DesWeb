class Coche{
	public color: string;
	public modelo: string;
	public velocidad: number = 0; //Hay q asignar los valores en el constructor

	public getColor() : string {
		return this.color;
	}

	public setColor(c : string) {
		this.color = c;
	}

	public acelerar(){
		this.velocidad++;
	}
	public frenar(){
		this.velocidad--;
	}

	public getVelocidad():number{
		return this.velocidad;
	}
}
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
console.log("La velocidad del coche 1 es: "+ c.getVelocidad());
console.log("La velocidad del coche 1 despues de frenar es: " +c.getVelocidad());