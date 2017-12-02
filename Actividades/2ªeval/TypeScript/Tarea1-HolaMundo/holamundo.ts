function holamundo(nombre){
	return "Hola mundo! Soy "+ nombre; 
}

var nombre = "Inaki Santos";
var resul = holamundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resul;

alert("Hola mundo");