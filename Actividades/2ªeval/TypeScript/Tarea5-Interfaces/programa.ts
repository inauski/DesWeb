class Programa{
	public nombre: string;
	public version: number;

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	getVersion(){
		return this.version;
	}
	setVersion(version:number){
		this.version = version;
	}
}

//Clase que hereda de Programa (por lo que tiene todos sus metodos)
class EditorVideo extends Programa{
	public timeline:number;

	setTimeline(timeline:number){
		this.timeline = timeline;
	}

	getTimeline(){
		return this.timeline;
	}

	//Valores de las propiedades
	getAllData():string{
		return this.getNombre() +  " - "+ this.getVersion()+ " - "+ this.getTimeline();
	}
}

//Instancia de la clase hija
var editor = new EditorVideo(); 
editor.setNombre("Masanz Studio"); //metodo de la clase padre
editor.setVersion(8); //metodo de la clase padre
editor.setTimeline(4000); //metodo de la clase HIJA

console.log(editor.getAllData());

