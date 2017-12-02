function holamundo(nombre) {
    return "Hola mundo! Soy " + nombre;
}
var nombre = "Inaki Santos";
var resul = holamundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resul;
//Variables y tipos (tipado fuerte)
var nombreDos = " Cualquier tipo";
//var nombre:string = "Inak Santos";
var edad = 21;
var programador = true;
var langs = ["PHP", "Javascript", "CSS"];
nombre = "LETRAS";
etiqueta.innerHTML = nombre + " - " + edad;
//Diferencia entre var y let
var a = 7;
var b = 12;
if (a === 7) {
    //el valor de 'a' solo tiene valor dentro del if
    var a_1 = 4;
    //b ya no vale 12, sino  4
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("FUERA DEL IF: " + a + " - " + b);
alert("Hola mundo");
//Funciones y tipado
function devuelveNumero(num) {
    return "Numero devuelto:" + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
//Si dejamos var num = 66 como arriba devuelve error al pedir boolean, hay que escribir true o false
function devuelveString2(texto) {
    if (texto == "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
alert(devuelveString2("hola"));
