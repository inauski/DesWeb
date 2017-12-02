//metodos que tendra obligatoriamente esta clase, si no aparecen dara error
interface CocheBase{
	getModelo():string;
	getVelocidad():number
}
//Implementamos la interfaz
class Coche implements CocheBase{
	public color: string;
	public modelo: string;
	public velocidad: number; 

	constructor(modelo:any = null){
		//Valores por defecto
		this.color = "Blanco";
		this.velocidad = 0;

		if (modelo == null){
			this.modelo = "BMW Generico";
		}else{
			this.modelo = modelo;
		}
		
		
	}

	public getModelo():string{
		return this.modelo;
	}

	public setModelo(modelo: string){
		this.modelo = modelo;
	}

	public getColor() : string {
		return this.color;
	}

	public setColor(c : string) {
		this.color = c;
	}
	//Visibilidad
	//Los protected solo se pueden acceder desde la clase que los define o desde cualquier clase que herede de esta
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
console.log("La velocidad del coche 1 es: "+ cGenerico.getVelocidad());
cGenerico.frenar();
console.log("La velocidad del coche 1 despues de frenar es: " +cGenerico.getVelocidad());

console.log("El modelo del coche1 es: " +c.getModelo());
console.log("El modelo del coche generico es: " +cGenerico.getModelo());