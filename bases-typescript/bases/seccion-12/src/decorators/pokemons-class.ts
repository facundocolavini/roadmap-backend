
// Decorador de clase 
function printToConsole(constructor: Function) {//Decorador  que se ejecuta en el momento que se transpila el codigo
    console.log(constructor) // Se ejecuta primero antes que la clase y hace una instancia de la clase Pokemon con Pikachu
}


//Factory Decorator 
const printToConsoleConditional = (print: boolean = false): Function => { // Se ejecuta cuando se compila el archivo y nos permite enviarle argumentos
    if (print) {
        return printToConsole
    } else {
        return () => { }
    }

}

//Bloquear prototipo de la class
const blockProptitype = (constructor: Function) => {//Evita la expansion de ciertas propiedades o metodos de una class.
    Object.seal(constructor)//Previene que se adieran nuevas propiedades
    Object.seal(constructor.prototype)
}


// Decorador de metodos del estilo Factory Decorator
function CheckValidPokemonId() {
    /* 
    Si se usa como un decorador de un metodo
        target : depende lo que nosotros coloquemos
        propertyKey: la llave del decorador "el nombre del metodo"
        descriptor: PropertyDescriptor Viene en JS en la version ES7 
    */
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }

    }
}

// Decorador de propiedad 
// Si es decorador de propiedad la funcion de return de mi decorador tipo factory va a ser del tipo:
/* 
  target : depende lo que nosotros coloquemos
propertyKey: la llave del decorador "el nombre del metodo"

*/
function readonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        // Vamos a darle una logica para evitar sobreescribir propiedades en mi class Pokemon
        const descriptor: PropertyDescriptor = {
            get() { // Obtenemos 
                console.log(this)
                return 'Facundo'
            },
            set(this, val) {
                //this es la instancia de la class y val que es a lo que nosotros intentamos establecer
                console.log(this);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false // para que no se vea la propiedad
                })
            }
        }
        return descriptor
    }
}


// @printToConsole //Ejecuta una instancia de la clase Pokemon sin tener que hacer la instancia de la clase Pokemon
@blockProptitype
@printToConsoleConditional(true)
export class Pokemon {
    @readonly(true) // Solo se puede leer la propiedad publicApi
    public publicApi: string = 'https://pokeapi.co';
    constructor(
        public name: string
    ) { }

    @CheckValidPokemonId()
    savePokemonToDb(id: number) {
        console.log(`Pokemon guardado en la DB ${id}`);
    }

}


