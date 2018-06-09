function Render(element){
    this.storage = this.validStorageRender();
    this.contenedor = element;
    this.renderView(this.contenedor);
}

Render.prototype.getStorage = function(){
    return JSON.parse(window.localStorage.getItem('productos'));
}

Render.prototype.setStorage = function(arr){
    window.localStorage.setItem('productos', JSON.stringify(arr));
}

Render.prototype.validStorageRender = function(){
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

Render.prototype.renderView = function(contenedor){
    this.storage.forEach(function(item, index) {
        var li = document.createElement('li');
        var template = `
        <li>
            <span>
                <img src="${item.imagen}">
            </span>
            <span>
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <strong>$${item.precio}</strong>
            </span>
        </li>`;
        li.innerHTML = template;
        contenedor.appendChild(li);
    });
}