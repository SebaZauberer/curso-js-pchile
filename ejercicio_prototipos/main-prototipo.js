function Persona(nom,ape,[dn,mn,an],em,gen,est,pes){
    this.nombre = nom;
    this.apellido = ape;
    this.fechaNacimiento = [dn,mn,an];
    this.email = em;
    this.genero = gen;
    this.estatura = est;
    this.peso = pes;
}

Persona.prototype.nombreCompleto = function(){
    console.log(this.nombre, this.apellido);
}

Persona.prototype.getEdad = function(){
    this.currentYear = new Date;
    this.edad = this.currentYear.getFullYear() - this.fechaNacimiento[2];
    return this.edad;
}

Persona.prototype.mayoriaEdad = function(){
    this.getEdad();
    if(this.edad >= 18){
        this.mayorDeEdad = true;
        console.log("Es mayor de edad");
    } else{
        this.mayorDeEdad = false;
        console.log("es menor de edad")
    }
}

Persona.prototype.getEstatura = function(){
    console.log(this.estatura/100+"cm");
}

Persona.prototype.getEstatura = function(){
    console.log(this.peso+"kg");
}

var seba = new Persona("Sebastian", "Gonzales Perez", [23,01,1992], "seba.olate.h@gmail.com", "masculino",178,65);