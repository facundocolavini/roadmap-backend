"use strict";
(() => {
    //
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroesStrength;
    (function (HeroesStrength) {
        HeroesStrength[HeroesStrength["acuaman"] = 0] = "acuaman";
        HeroesStrength[HeroesStrength["batman"] = 1] = "batman";
        HeroesStrength[HeroesStrength["flash"] = 5] = "flash";
        HeroesStrength[HeroesStrength["superman"] = 100] = "superman";
    })(HeroesStrength || (HeroesStrength = {}));
    const fuerzaFlash = HeroesStrength.flash;
    const fuerzaSuperman = HeroesStrength.superman;
    const fuerzaBatman = HeroesStrength.batman;
    const fuerzaAcuaman = HeroesStrength.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    activar_batiseñal();
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    pedir_ayuda();
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
