let add = (nombre,desc,img,precio) =>{
    var producto = new Product(nombre,desc,img,precio);
    producto.save();

    document.getElementById('name').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('img').value = '';
    document.getElementById('price').value = '';

    alert('El producto '+producto.nombre+' se creó con exito');
}

document.addEventListener('DOMContentLoaded', function(){
    var name = document.getElementById('name');
    var desc = document.getElementById('desc');
    var img = document.getElementById('img');
    var price = document.getElementById('price');

    document.getElementById('add').addEventListener('click', function(){
        add(name.value,desc.value,img.value,price.value);
    });
})