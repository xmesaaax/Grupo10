class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }

    get nombre(){
        return this._nombre
    }
}

let persona3 = new Persona('Juan', 'Perez');
console.log(persona3.nombre)

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1)

let persona2 = new Persona('Meduele', 'Elano');
console.log(persona2)

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }

    get departamento(){
        return departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }  
}
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas')

console.log(empleado1)