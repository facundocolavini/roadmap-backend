// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: Array<String>): number => {
  return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = false) => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman(true);

// Rest?
const unirheroes = (...personas: Array<string>): string => {
  return `${personas.join(", ")}`;
}
const heroesUnidos: string = unirheroes('Clark', 'Joseph', 'Kent');

console.log({ heroesUnidos });

// Tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: Array<string>) => { }

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (m: number, s: string, b: boolean, a: Array<string>) => void;
noHaceNadaTampoco = noHaceNada
