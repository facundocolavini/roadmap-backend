# JSON WEB TOKEN - JWT
Es popular por que permite una autenticacion pasiva entre los usuarios conectados. Nos da un id unico.
El backend genera ese id unico.La idea es permitir esa autenticacion pasiva a nuestros clientes.

El json web token consta de 3 partes
- Header: Tiene informacion del algoritmo utilizado para la encriptación junto con el tipo de token en este caso (JWT)
- Payload:No es recomendable guardar informacion importante es volatil y puede verse dentro del JWT por lo que no es aconcejable utilizar para almacenar informacion sensible como contraseñas, tarjetas de credito, etc.Si se recomiendo guardar informacion que si se logra atrapar como el uid del usuario.
- Firma: Es algo que le permite a JWT definir si el Token es valido.Valida si el token es valido o si espiro.

## Que trabajo debe validar el backend: 

- Que el JWT no sea manipulado
- Validar que la firma exista 
- Que sea vigente 


Aquí cubriremos varios temas como: 

- Introducción a los tokens
- JWT
- Login personalizado
- Protección de rutas vía token
- Leer payload del token sin la firma
- Tips importantes para POSTMan
- Despliegues en Heroku para pruebas en producción
- Uso de Middleware


# Autenticación por token 

Un token puede ser fisico como virtual.Ambos funcionan de la misma forma.

Generalmente se utilizan para autenticar en 2 pasos.Y ese token se puede asociar con la cuenta.

## Por que usar tokens?

Por las Variables de sesion para manejar la autenticación de usuarios y se utiliza hoy en dia.
Una variable de sesion se crea cuando un usuario se autentica correctamente en nuestra aplicacion.
Por lo que el servidor la relacion con ese usuario.

Si ese servidor se apagase o se desconectase los usuarios perderian su conexion de sesion.
Si se maneje por variable de sesion para que el servidor administre correctamente la sesiones y que no pierda la referencia a los usuarios.
Para este problema se utilizan los tokens para evitar ese gasto en servidores de grandes costos.
 

## Condiciones importantes:

 
La parte del payload es totalmente visible ,fecha de emicion fecha de expiracion y que la informacion este encriptada de una forma 100% segura.

En el backend tenemos que asegurarnos que los tokens no sean manipulados para asegurarnos que los tokens sean validos.

Primera condicion de seguridad: Los tokens se almacenan dentro de la web en Local Storage donde se graba la informacion persistente.
El local storage tiene informacion del lastToken y comparte informacion por dominio.

Session storage se borra cuando cerramos el navegador web

Nuestro servidor tiene que identificar si nuestro token no fue manipulado.


Objeto que nos da el Token :
Por eso no se debe enviar informacion sensible ya que aparecera dentro del objecto

token:{
iat: 1516239022, //Fecha de expiracion
name: "Facundo Doe", // Nombre
sub: "1234567890"// Informacion 
exp: 12334564 //Fecha de expiracion
}

Yo podria saber cuando va a expirar el token de la siguiente manera: 

les exp =  new Date();

exp.setTime( fechadeExpiracion * 1000)

