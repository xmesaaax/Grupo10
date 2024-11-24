class Producto{
    constructor( nombre,precio, categoria){
        this._nombre = nombre
        this._precio = precio
        if (categoria ==="ropa")
            this._categoria = "indumentaria"
        
        else if (categoria==="comida")
            this._categoria = "alimentos"
      
        else this._categoria="indefinida"
    
        this._id=Math.floor(Math.random()*10000) 
}
    get id (){
        return this._id
    }
    get nombre(){
        return this._categoria
    }
    get categoria(){
        return this._precio 
    } 
    get precio(){
        return this._precio
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    set categoria(categoria){
        if (categoria ==="ropa")
            this._categoria = "indumentaria"
        
        else if (categoria==="comida")
            this._categoria = "alimentos"
      
        else this._categoria="indefinida"
    } 
    set precio(precio){
        this._precio = precio
    }
    mostrarProducto = function (){
        console.log (this._categoria+this._precio+this._nombre)
    }
  
        
}
{let producto1 = new Producto('Pantalón', 200, 'ropa')
    let producto2 = new Producto('Camisa', 100, 'Ropa')
    
    producto1.mostrarProducto()
    producto2.mostrarProducto()
}

class Orden{
    constructor(){
        this._id=Math.floor(Math.random()*10000)
        this._productos = [] 
     
    }
    get id (){
        return this._id
    }  
    agregarProducto = function (producto){
        
    }

}