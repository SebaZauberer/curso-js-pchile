/* var dato = "global";

function local(){
    var dato = "local";
    return dato;
}

console.log(dato);
console.log(local());
console.log(dato); */

var miArray = [1,2,3,4];

/* console.log("valor",miArray[2]);
console.log("Mi array tiene",miArray.length,"datos");
console.log("valor original",miArray);
miArray.push(5);
console.log("valor actual",miArray); */

function add(num){
    miArray.push(num);
}

console.log(miArray);
add(8);
console.log(miArray);