var doc = document;
var input = doc.getElementById('box');
var lista = doc.getElementById('lista');
var btn = doc.getElementById('add');
var tareas = ["Primera tarea", "Segunda tarea"]; //ner Array();

//se crea la funcion para agregar tareas al array
function addTarea(tarea){
    tareas.push(tarea);
}

//se crea la funcion que renderiza la lista de tareas
function renderList(){
    //seteamos la lista del array
    lista.innerHTML = '';
    tareas.forEach(function(item,i){
        console.log(item);
    });
}

renderList();