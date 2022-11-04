import http from 'http'; // Server

//Creamos el servidor

http.createServer(function (req, res) {
    // respuesta
    console.log(req);
    // Headers de mi respuesta podemos cambiar codigo y poner de que tipo va a ser el contenido de mi respuesta
    // Le decimos a los headers que va a ser un archivo descargable
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('id, nombre \n');
    res.write('1, Facundo \n');
    res.write('2, Juan \n');
    res.write('3, Pedro \n');

    // const persona = {
    //     id: 1,
    //     nombre: 'Facundo'
    // }
    // res.write(JSON.stringify(persona))

    // Res a enviar a mi cliente 
    // res.write('404 | Page not found')
    // fin de la respuesta 
    res.end();

}).listen(8080);// Puerto a ocupar

console.log('ESCUCHANDO EL PUERTO,', 8080)
