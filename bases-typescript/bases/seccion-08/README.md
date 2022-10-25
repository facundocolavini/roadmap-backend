## Clases en TypeScript

La programación orientada a objetos es un tema sumamente importante, especialmente si nuestras aplicaciones van de mediana a gran escala. TypeScript trae toda la potencia de una programación orientada a objetos a la web.

Toda la sección se enfoca en enseñar sobre el uso de clases.

Puntualmente aprenderemos sobre:

- Crear clases en TypeScript
- Constructores
- Accesibilidad de las propiedades:
- Públicas
- Privadas
- Protegidas
- Métodos de las clases que pueden ser:
- Públicos
- Privados
- Protegidos
- Herencia
- Llamar funciones del padre, desde los hijos
- Getters 
- Setters
- Métodos y propiedades estáticas
- Clases abstractas
- Constructores privados.





# Crear clases en TypeScript 

Podemos definir propiedades private que quieren decir que solo van a poder accederse dentro de la clase creada.
Lo mismo pasa cuando definimos una propiedad com publica en ese caso si tendremos acceso a esa propiedad por fuera.
Propiedades del tipo static para tener acceso a estas propiedades tengo que usar la clase pero sin instanciarla.Las propiedades estaticas siempre se mantienen iguales.Tamb ien funciona con metodos estaticos


```ts
    class Avengers {
        private name : string; // No voy a tener acceso por ser propiedad privada
        public team : string;
        public realName: string;

        constructor(name:string = '', team:string = '', realName:string = ''){
             this.name = name;
             this.team = team;
             this.realName = realName;
        }
    }

 
    // Acceder ami propiedad static en mi clase
       console.log(Avengers.avgAge);
 ```


 ### Forma corta de definir propiedades en una clase
    De esta forma obviamos la definicion de las propiedades por fuera del constructora salvo la propiedad estatica que no se le puede definir adentro del constructor.
    
 ```ts
     class Avenger {
        static  avgAge: number ;

        constructor(
            private name:string = '',
            private team:string = '',
            public realName?:string,
            avgAge:number = 55      
        ){
            //Ejecuta este codigo al instanciar la clase
            Avenger.avgAge =  avgAge
        }
    }

 ```

## Metodos privados , publicos y estaticos

- Metodo publico de una clase 

Para el caso del metodo bio , este es un metodo publico por que puedo verlo por fuera de la clase.

```
 class Avenger {

        static  avgAge: number ;
        static getAvAge(){ // Metodo static
            return this.avgAge;
        }
    
        constructor(
            private name:string = '',
            private team:string = '',
            public realName?:string,
            avgAge:number = 55      
        ){
            //Ejecuta este codigo al instanciar la clase
            Avenger.avgAge =  avgAge
        }

        // Metodo de mi clase    
        bio(){
            return `${this.name}${this.team}`
        }
    }


    // Asi llamamos un metodo public 
    const antman: Avenger = new Avenger('Antman', 'Capitan')
    antman.bio()

```

 - Metodos privados 
  
    Todavia no hay formas de hacer un metodo privado por el ESMcript por que no hay restriccione spor parte de javascript. 
    Pero si nos arrojara un alerta.

- Metodo static 
    Puedo acceder a el sin la necesidad de instanciar la clase.Llamando solo a la clase puede accederse a la propiedad o metodo static.


    ```ts
    Avenger.getAvAge()

    ```


## Herencias , Super y extend

    ```
      class Avenger {
        constructor(
            public name:string,
            public realName:string 
        ){
            console.log('Constructor Avenger llamado');
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutan:boolean
        ){
            super(name,realName)
            console.log('Constructor Xmen llamado')
        }
        getFullNameDesdeXmen(){
            console.log(super.getFullName());
            
        }
    }

    const wolwerine = new Xmen('Wolwerine', 'Logan',true);
    console.log(wolwerine);

    // Accedo a un metodo extendido de mi clase avenger y lo utilizo en mi nueva clase xmen
    wolwerine.getFullNameDesdeXmen()

    // No deja acceder auna propiedad protected
    const nuevoAvenger = new Avenger('Hola','Mundo');
    nuevoAvenger // No aparece el metodo protected para utilizar desde afuera 
    ```
### Cuando extendemos una clase:
  **Extends:** Cuando extendemos una clase significa que estamos diciendo que mi clase Xmen va a tener a dispocicion todo lo que mi clase Avenger disponga incluso sus restricciones.
    Si la clase Xmen no tiene un constructor se llama al constructor de la clase Avenger.
    **Metodo Super:** Si definimos un constructor en la clase Xmen que extiende a Avenger vamos a tener algunos inconvenientes por lo que se debe utilizar la palabra reservada super para que podamos agregar nuevas propiedades y metodos a Xmen y ademas tenga todo lo que contiene la clase Avenger.El super llama al constructor de mi clase Avenger.Se debe de llamar tan pronto se pueda.

**Private:** No podemos acceder al metodo o propiedad por fuera de la clase.
**Protected:**Accedemos a metodos y propiedades dentro de clases que se extiendan de otras clases (Xmen extend Avenger).Nos permite acceder a los metodos de la clase que extendemos.Pero no podremos acceder a una propiedad protegida de la clase accediedo desde afuera.


### Getters y Setters


Que es un getter y un Setter , visualmente parecen propiedades comunes y corrientes pero internamente es como un metodo.

- Asi definimos un getter en mi clase:
Los getter se mandan a llamar no se ejecutan con (). Obtienen valores.

```
get fullName(){
    return `${this.name} ${this.realName}`
}


// Asi se accede al getter
  wolwerine.fullName
```

- **Setters:** Es un metodo que recibe un valor  y establece algo pero nunca regresa nada es void.El objetivo del setter es establecer valores.Solo puede recibir un solo argumento.
- Podemos establecer cierta logica antes de ejecutar los setter.
- La respuesta es siempre sincrona , no se recomienda ejecutar codigo asincronico dentro
 
 ```
    set fullName(name:string ){
        if( name.length < 3) {//Logica antes de ejecutar los setter
                throw new Error("El nombre debe de ser mayor a 3 caracteres")
        }
        this.name =  name;
    }
 ```


 ## Clase Abstract 

 Una clase no sirve para crear instancia.
 Las clases abstractas sirven para crear otras clases o para asegurarse que otras clases implementen lo que esperamos.
 Por decir asi son como cascarones para poder crear clases.
 Otro uso puede ser para especificar que estamos esperando una clase o algun objeto o argumento que tenga el tipo que necesitamos o que este extendido de donde necesitamos.



 ## Constructores privados

 Un constructor privado lo podemos utilizar para controlar la manejar en que nuestras instancias son ejecutadas.
 Se puede utilizar para manejar singleton es decir una unica instancia atravez de toda mi aplicacion.Si necesito acceso a la instancia previamente creada voy a llamar esta instancia que fue creada por un constructor privado y siempre va a regresar la misma instancia original que se creo.

 Basicamente controlamos como mis nuevas clases son creadas.Si la instancia esta creada usa la que esta sino la crea.

 