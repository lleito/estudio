//alert ("hola mundo_2")

class animal {
    constructor(especie,edad,color){
      this.especie = especie;
      this.edad = edad;
      this.color = color;
      this.info = `soy ${this.especie}, tengo ${this.edad} anos y soy de color ${this.color}`
    }
    verinfo(){
        document.write(this.info)
    }
}


let perro = new animal("perro","13","amarillo");

//document.write(perro.informacion) 

perro.verinfo();