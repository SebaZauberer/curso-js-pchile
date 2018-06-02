var auto = {
    color: 'rojo',
    marca: 'toyota',
    modelo: 'supra',
    motor:{
        cc: '1.6',
        comusible: 'bencina'
    },
    puertas: 4,
    year: 2018,
    transmicion: 'mecanica',
    permisoCirculacionAlDia: true,
    tipo: 'sedan',
    encendido: false,
    frenar: function(){
        return 'el auto frenó';
    },
    encender: function(val){
        this.encendido = val;
    } 
}

console.log(auto);
auto.encender(true);
console.log(auto.encendido);