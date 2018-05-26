/*var int = 10;
var str = "abcd";
var bool = true;
var und;

console.log(typeof int);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof und);

var num1 = 1;
var num2 = 2;

var suma = num1 + num2;
var resta = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

console.log("suma ", suma + " mas un string");
console.log("resta ", resta);
console.log("multiplicación ", mul);
console.log("division ", div);

var num =  1;
console.log(num);

var num2 = ++num;
console.log(num2);

var bool1 = true;
var bool2 = false;

console.log(bool1 === bool2);
console.log(bool1 !== bool2);
console.log(bool1 !== bool1);
console.log(bool2 === bool2);

var num1 = 10;
var num2 = 20;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

var num1 = 10;
var num2 = 20;

console.log(num1 < num2 && num2 > num1);
console.log(num1 < num2 && num2 >= num1);
console.log(num1 > num2 && num2 > num1);
console.log(num1 > num2 && num2 < num1);

var num1 = 10;
var num2 = 20;

console.log(num1 < num2 || num2 > num1);
console.log(num1 < num2 || num2 >= num1);
console.log(num1 > num2 || num2 > num1);
console.log(num1 > num2 || num2 < num1);

var num1 = 10;
var num2 = 20;

/*console.log(num1 < num2 ? "si es valido" : "no es valido");
console.log(num1 > num2 ? "si es valido" : "no es valido");

if(num1 < num2 && num1 > num2){
    console.log("Se ejecuta");
} else if(num1 < num2 || num1 > num2){
    console.log("Se ejecuta el if else");
} else {
    console.log("No se ejecuta");
}

var num1 = 10;
var num2 = 20;
var nombre = "Seba";

switch(nombre){
    case 10:
        console.log("es igual a 10");
        break;
    case 20:
        console.log("es igual a 10");
        break;
    case 30:
        console.log("es igual a 10");
        break;
    case nombre:
        console.log("es un nombre");
        break;
    default:
        console.log("es otro valor");
}*/

//var nombre = (parametros) => {
    //bloque de codigo
//}

/*function nombreCompleto (nombre, apellido){
    //bloque de codigo
    console.log(nombre + " " + apellido);
}

nombreCompleto("Sebastian","Olate H.");*/

function edad(anioNac){
    return 2018 - anioNac;
}

console.log(edad(1992));

/*if(edad(1992) >= 18){
    console.log("es mayor de edad");
} else{
    console.log("es menor de edad");
}*/

var rangoEdad = function(e){
    if(e >= 18){
        return true;
    } else if(e > 0 && e <= 17){
        return false;
    } else{
        return undefined;
    }
}

switch(rangoEdad(edad(1992))){
    case true:
        console.log("es mayor de edad");
        break;
    case false:
        console.log("es menor de edad");
        break;
    default:
        console.log("la edad no esta definida");
}