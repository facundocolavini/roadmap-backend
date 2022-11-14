import express, { Request, Response } from "express";
const app = express()
const port = 8080;

//Middleware 
app.use(express.static('public')) // Le dice a express donde esta mi carpeta public para que pueda utilizar su contenido public tanto css como html como cualquier cosa.

app.get('/', function (req: Request, res: Response) {
    res.send('Home Page')
})

app.get('/otras-rutas', function (req: Request, res: Response) {
    res.send('Otras rutas')
})


// Cualquier otra ruta que no sea las que puse antes
app.get('*', function (req: Request, res: Response) {
    res.sendFile(__dirname + '/public/404.html') // Busca en public mi page 404 y la envia en la response para utilIzarlo  
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})