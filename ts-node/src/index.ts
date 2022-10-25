// import { Hero } from "./classes/Hero";
// Alias
// import { Hero as SuperHero } from "./classes/Hero";
// Todo lo que este en el archivo  saco lo que quiero
import *  as HeroClasses from "./classes/Hero";
import powers, {Power} from "./data/powers";


console.log('Hola Mundo!!!!');







// const ironman = new SuperHero('Ironman', 1,55)
const ironman = new HeroClasses.Hero('Ironman', 1,55)

console.log(ironman);

console.log(ironman.power)