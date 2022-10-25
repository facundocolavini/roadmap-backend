
Esta sección esta dedicada a crear interfaces, las cuales nos permitirán crear reglas o planos de como se deben de construir clases, métodos u objetos.

Puntualmente aprenderemos:

¿Por qué es necesario una interfaz?
¿Cómo creamos una interfaz básica?
Crear propiedades opcionales
Crear métodos
Asignar interfaces a las clases


# Interfaz Basica


Una interfaz funciona casi igual que un type.
Nos ayudan a restringir a como lucen nuestros objetos

La diferencias entre type y interface es que las interfaces puede expandirse.La interface no define el comportamiento como una clase.
La clase puede implementar metodos la interface solo se asegura que sea un metodo.La interfaz no implementa los metodos.



## Estructuras complejas 


Al hacer interfacez nos damos cuenta que podemos tener varios niveles en nuestras interfacez y se hacen dificiles de leer.Si tenemos mas de un nivel se recomiendo separar los subniveles por otras interfacez.
```
   
    interface Client {
        name:string; // NIVEL 0
        age?:number; // NIVEL 0      
        address?:{ // NIVEL 1
            id:number;
            zip:string;
            city:string;
        }
    }

```
Si la interface se pone compleja se sugiere dividirla en sub interfaces mas chicas.Las subinterfacez va abajo de la interface principal.
```
    interface Client {
        name:string;
        age?:number;       
        address?:Address
    }

    interface Address {
        id:number;
        zip:string;
        city:string;
    }
```
Cuando agregamos metodos en nuestra interfaces estamos detallando lo que devuelve y si recibe parametros.
Los metodos en las interfaces no son implementadas  es decir no tiene la logica para resolverlo solamente espera que reciba lo que le especificamos  o como luce.

Si necesitaramos implementar metodos no se recomiendan las interfaces para esto se recomienda crear una clase.

## Interfaces en clases
```
    interface Xmen {
        name:string;
        realName: string;
        mutantPower(id : number):string;
    }
    interface Human {
        age:number;
    }
    //Implementamos mi interface en Mutant
    class Mutant implements Xmen, Human {
        constructor(
            public age:number,
            public name: string,
            public realName:string
        ){}
        
        mutantPower(){ return `${this.name} ${this.realName}`}
    }
```
Podemos implementar nuestras interfaces en nuestras classes.Utilizando la palabra reservada implement para implementar se utiliza para forzar  a que la clase todo lo que yo quiera de las mismas.


## Interfaces a funciones 
