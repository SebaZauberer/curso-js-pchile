function nuevoProducto(nombre, desc, img, price){
    //creamos un nuevo objeto producto
    var producto = {
        nombre: nombre,
        descripcion: desc,
        imagen: img,
        precio: price
    }
    //enviamos el objeto producto a la funcion addProduct
    addProduct(producto);
}

function getStorage(){
    return JSON.parse(window.localStorage.getItem('productos'));
}

function setStorage(arr){
    window.localStorage.setItem('productos', JSON.stringify(arr));
}

function addProduct(obj){
    //traemos el array con los datos almacenados en el localStorage
    var nuevoArrayProductos = getStorage();
    //insertamos el nuevo objeto en el array
    nuevoArrayProductos.push(obj);
    //guardamos nuevamente en localStorage
    setStorage(nuevoArrayProductos);
}

function validStorage(){
    // validamos si localStorage es nulo (que no existe)
    if(getStorage() == null){
        //insertamos un array vacio
        setStorage([]);
        // devolvemos el localStorage
        return getStorage();
    } else {
        // devolvemos el localStorage
        return getStorage();
    }
}

function renderView(arr){
    // llamamos al contenedor productosList
    var ul = document.getElementById('productosList');
    // seteamos su html
    ul.innerHTML = '';
    // iteramos el array de productos
    arr.forEach(function(item, index){
        var li = document.createElement('li');
        var col1 = document.createElement('span');
        var col2 = document.createElement('span');
        var img = document.createElement('img');
        var titulo = document.createElement('h3');
        var desc = document.createElement('p');
        var price = document.createElement('strong');
        
        // seteamos los atributos de los elementos DOM
        col1.appendChild(img);
        col2.appendChild(titulo);
        col2.appendChild(desc);
        col2.appendChild(price);
        li.appendChild(col1);
        li.appendChild(col2);
        ul.appendChild(li);
    });
}