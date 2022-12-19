Lo que vamos a estar agregando a nuestro rest server en esta seccion:

- Definir los alcances de nuestro RESTServer
- CRUD
- Encriptación de contraseñas
- Validaciones personalizadas
- Creación de roles
- Conexiones con MLAB
- Despliegue de base de datos en la nube
- Conexión con Robo 3T con base de datos en la nube
- Configuración de variables de entorno
- Borrado de archivos
- Eliminado físico de la base de datos
- Eliminación por estado en un campo de la colección

Para hacer diagramas de modelos de base de datos podemos utilizar draw.io.

## Configuracion de MongoDB y mongo Atlas

Mongodb https://www.mongodb.com/atlas/database

Mongo db Atlas : Es un cliente que esta configurado en la nube para que nosotros podamos consumirlo.
Cluster: Es una combinacion de servidores trabajando en conjunto como si fuera uno solo.

Primeros pasos para realizar una base de datos en MongoDB Atlas:

- Iniciar session.
- Creamos un Cluster (Gratuito para practicas).
- Creamos un usuario global (En database access) el cual vamos a utilizar para conectar la aplicacion de node.
- Agregar a nuestro cluster nuestra ip publica a la whitelist en Security/Network Address.
- Conectamos nuestra base de datos en MongoDB Atlas con el programa MongoDB Compass.
- Utilizamos nuestro boilerplate restserver - https://github.com/facundocolavini/rest-server-boilerplate.git
- Conectamos con mi cluster con mongodb+srv://user_node_cafe:<password>@my-cluster-cafe.aea0yc5.mongodb.net/<databasename>
- Instalamos mongoose ODM es un modelador de objectos que vamos a guardar en la DB. https://mongoosejs.com/

## Modelo de Usuario

En la carpeta models realizamos los modelos de datos. Un modelo de datos nos ayuda a saber como queremos hacer que luzca nuestra información en la base de datos. MongoDb utiliza colecciones cuando guardamos la informacion guarda esa informacion como objectos.
