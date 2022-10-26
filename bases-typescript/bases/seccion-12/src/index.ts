import { Pokemon } from "./decorators/pokemons-class";

const charmander = new Pokemon('charmander');
const charmander2 = new Pokemon('Charmander');
const charmander3 = new Pokemon('Charmander');
const charmander4 = new Pokemon('Charmander');



// console.log(charmander2);
// console.log(charmander3);
// console.log(charmander4);

// Decorador bloqueante de prototipos
//(Pokemon.prototype as any).customName = 'Pikachu'; // Quiero expandir o agregar una nueva propiedad a mi class pokemon
//console.log(charmander);// Esto nos dara un error ya que el decorador bloqueante evita que nuestra class Pokemon se expanda y se agreguen nuevas propiedades o metodos nuevos

// Decorador de metodo
//charmander.savePokemonToDb(50)

// Decorador de propiedad
charmander.publicApi = 'https://facundo-colavini.com';
console.log(charmander);
