let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28
}
console.log(persona.edad)

let persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona2['nombre'])


for (nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])   
}
persona2.tel = '55443322'
delete persona2.tel
console.log(persona2)

function Persona(nombre, apellido, email){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
}
let juan = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(juan)

function Persona(nombre, apellido, email){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(juan.nombreCompleto())
