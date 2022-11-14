import express, { Request, Response } from "express";
const hbs = require('hbs');
const app = express()
const enviroment = require('dotenv').config();

const port = process.env.PORT
//Middleware 
app.use(express.static('public')) // Le dice a express donde esta mi carpeta public para que pueda utilizar su contenido public tanto css como html como cualquier cosa.

// Usar un engine , usamos hbs
app.set('view engine', 'hbs');

//Partials hbs - Le decimos donde esta la carpeta partials
hbs.registerPartials(__dirname + '/views/partials', function (err: Error) {
    console.log(err, 'Partials Hbs');
});

app.get('/', function (req: Request, res: Response) { // Sirve el index.html de public
    res.render('home', { // Para renderizar una vista
        //Opciones para enviar a la hora de renderizar la vista 
        name: 'Facundo Colavini',
        title: 'Curso de Node'
    });
})
app.get('/generic', function (req: Request, res: Response) {
    res.render('generic', {
        name: 'Facundo Colavini',
        title: 'Curso de Node'
    });
})
app.get('/elements', function (req: Request, res: Response) {
    res.render('elements', {
        name: 'Facundo Colavini',
        title: 'Curso de Node'
    });
})


/* app.get('/generic', function (req: Request, res: Response) {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function (req: Request, res: Response) {
    res.sendFile(__dirname + '/public/elements.html')
})

// Cualquier otra ruta que no sea las que puse antes
app.get('*', function (req: Request, res: Response) {
    res.sendFile(__dirname + '/public/404.html') // Busca en public mi page 404 y la envia en la response para utilIzarlo  
}) */

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})