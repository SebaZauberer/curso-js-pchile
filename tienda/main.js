// validar el storage
validStorage();

// llamar a los input
var btn = document.getElementById('add');
var nombre = document.getElementById('name');
var desc = document.getElementById('desc');
var img = document.getElementById('img');
var price = document.getElementById('price');

// creamos el evento click del btn
btn.addEventListener('click', function(){
    nuevoProducto(nombre.value, desc.value, img.value, price.value);
    alert('nuevo producto '+ nombre.value + ' se ha creado con exito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    price.value = '';
});