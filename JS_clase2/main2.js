var doc = document;
var input = doc.getElementById('box');
var lista = doc.getElementById('lista');
var btn = doc.getElementById('add');
var tareas = []; //ner Array();

//se crea la funcion para agregar tareas al array
function addTarea(tarea){
    tareas.push(tarea);
    renderList();
}

//se crea la funcion que renderiza la lista de tareas
function renderList(){
    //seteamos la lista del array
    lista.innerHTML = '';
    //recorremos el array
    tareas.forEach(function(item,i){
        //creamos la etiqueta <li></li>
        let li = doc.createElement('li');
        //le asignamos un valor
        li.innerHTML = item;
        //insertamos la etiqueta en el DOM
        lista.appendChild(li);
    });
}

btn.addEventListener('click', function(){
    addTarea(input.value);
});