
(()=>{

  
// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender:boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}
  batimovil.acelerar()
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales}

interface Villano {
  reir?:boolean;
  comer?:boolean;
  llorar?:false
}
const guason : Villano = {
  reir: true,
  comer:true,
  llorar:false
}
console.log(guason)
const reir = ( guason: Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason)


// Cree una interfaz para la siguiente funcion
interface City {
  (citizen:string[]):number
}
const ciudadGotica:City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

console.log(ciudadGotica(["1","2","3"]))

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Citizen {
  name:string;
  age:number;
  sex:string;
  maritalStatus:string;
  imprimirBio():string;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
 class Persona implements Citizen {
   
  constructor(
    public name: string,
    public age:number,
    public sex:string,
    public maritalStatus:string

  ){}

  imprimirBio(){ 
    return `
      Nombre: ${this.name}
      Edad: ${this.age}
      Sexo: ${this.sex} 
      Estado Civil: ${this.maritalStatus}
    `
  }

}
const facundo = new Persona("Facundo",27,'Masculino','Soltero');
  console.log(facundo);
  console.log(facundo.imprimirBio())

})()