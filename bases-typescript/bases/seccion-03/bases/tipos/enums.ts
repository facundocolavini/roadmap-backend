//Para decirle a ts que son archivos independientes
(() => {
    //Enumeraciones 
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    let currentAudio: AudioLevel = AudioLevel.max;
    enum enumeracion {
        a = 10,
        b,
        c = 9,
        d
    }


    console.log(currentAudio);
    console.log(AudioLevel);
    console.log(enumeracion);



})()