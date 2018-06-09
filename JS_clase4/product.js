function Product(name, desc, img, price){
    this.nombre = name;
    this.descripcion = desc;
    this.imagen = img;
    this.precio = price;
    this.storage = this.validStorage();
}

Product.prototype.getStorage = function(){
    return JSON.parse(window.localStorage.getItem('productos'));
}

Product.prototype.setStorage = function(arr){
    window.localStorage.setItem('productos', JSON.stringify(arr));
}

Product.prototype.save = function(){
    // var nuevoArrayProductos = getStorage();
    var producto = {
        nombre: this.name,
        descripcion: this.desc,
        imagen: this.img,
        precio: this.price
    }

    this.storage.push(producto);
    this.setStorage(this.storage);
}

Product.prototype.validStorage = function(){
    // validamos si localStorage es nulo (que no existe)
    if(this.getStorage() == null){
        //insertamos un array vacio
        this.setStorage([]);
        // devolvemos el localStorage
        return this.getStorage();
    } else {
        // devolvemos el localStorage
        return this.getStorage();
    }
}