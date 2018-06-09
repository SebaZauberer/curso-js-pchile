/* 
Programacion orientada a prototipos
*/
//este es un constructor de objetos no literales
function Comida(nombre, tipo, costo, procedencia){
    this.nombre = nombre;
    this.tipo = tipo;
    this.costo = costo;
    this.procedencia = procedencia;
}
// agregando prototipos al constructor

Comida.prototype.getNombre = function(){
    return this.nombre;
}

Comida.prototype.descuento = function(desc){
    var dsco =  this.costo * desc / 100;
    return this.costo - dsco;
}

var Porotos = new Comida("Porotos con riendas", "legumbre", 2000, "Chilena");

console.log(Porotos.nombre, Porotos.getNombre());
console.log(Porotos.descuento(20));


// agregando un prototipo a un objeto predefinido en el lenguaje
var arr = [1,2,3,4];

Array.prototype.forEash = function(cb){
    console.log(this);
    for(var i = 0; i < this.length; i++){
        cb(this[i], i);
    }
}

arr.forEash(function(item, index){
    console.log('log ->', item, index);
});

arr.forEach(function(item, index){
    console.log('log ->', item, index);
});