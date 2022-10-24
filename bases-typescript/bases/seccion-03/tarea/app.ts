(() => {
  //
  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum HeroesStrength {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100
  }
  const fuerzaFlash: HeroesStrength = HeroesStrength.flash;
  const fuerzaSuperman: HeroesStrength = HeroesStrength.superman;
  const fuerzaBatman: HeroesStrength = HeroesStrength.batman;
  const fuerzaAcuaman: HeroesStrength = HeroesStrength.acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }
  activar_batiseñal()
  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }
  pedir_ayuda()
  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = poder.length as number;
  console.log(largoDelPoder);


})()

