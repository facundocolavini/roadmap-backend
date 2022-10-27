## Refuerzo de conceptos 



### Arrow Functions  

Diferencias entre una funcion comun
Las funciones tradicionales manipulan el valor a donde apunta el this.Y las funciones de flecha no.
Se define con la palabra reservada const y se declara ()=>{}


Caracteristicas:

 - Return implicito
    Si su cuerpo tiene una linea y esa linea es solo el return.Entonces podemos borrar las llaves y el return
```js
    const suma = (a,b) => a + b
```

### Callbacks
Es una funcion que se envia como argumento
Es una funcion que se ejecuta eventualmente cuando la funcion que lo envuelve quiera ejecutarlo
El primer argumento de un callback puede ser el error para manejar algun mensaje de error que querramos ver.
```
const getEmpleado = (id:number, callback: Function) =>{
    const empleado = empleados.find(e => id === e.id)?.nombre

    if( empleado ){
        callback(null ,empleado);
    }else {
        return `Empleado con id  ${id} no existe`;
    }
}

```

Problemas comunes con los callbacks:

#### Callbacks Hells

El problema es cuando agrupamos muchos callbacks dentro de otro callback y esto hace que se haga imposible de identificar y de leer.

```js
getEmpleado(id, (err:string, empleado: Empleado )=>{
    if(err){
        console.log('ERROR');
        return console.log(err)
    }

    getSalario(id, (err: string,salario: Salario)=>{
        if(err){
            console.log('ERROR SALARIO!')
            console.log(err)
        }else {
            console.log(`El empleado: ${empleado} tiene un salario de ${salario}`)
        }
    })
})



```

Como evitar los callbacks Hells

### Promesas
Para evitar los callbacks hells utilizamos las promesas que nos hacen el codigo mas legible y mantenible. 
Una promesa recibe un callback ese callback recibe 2 parametros el resolve y el reject.

**reject:**Si sabemos que la promesa va a tener un error va a devolver el reject.Cuando hay un error.
**resolve:**Si sabemos que la promesa va a resolverse y obtener lo que esperamos va a darnos el resolve.Cuando todo se hace correctamente.
**then** Se utiliza para manejar la resolucion de la promesa cuando todo este correcto.
**catch:**Si sucede un error pasa  por el catch.
Las promesas evitan tener que enviar callbacks por parametro en mis funciones.
Definimos una promesa

```
    const getEmpleado = (id:number) =>{ // Ya no utilizamos callbacks en mis argumentos
        const empleado = empleados.find(e => id === e.id)?.nombre
        const promesa = new Promise((resolve, reject) =>{
            if(empleado){
                resolve(empleado);
            }else{
                reject(`Empleado con id  ${id} no existe`);
            }
        })

        return promesa;
    }

    getEmpleado(4)
        .then((e)=>{console.log(e)})
        .catch((error)=>{console.log(error)})


```

En las promesas tambien tenemos el Promise Hell que surge cuando encadenamos varias promesas que necesitamos resolver con then y catch.

```js
getEmpleadoSimplificado(1)
    .then( empleado => {
        getSalarioSimplificado(41)
            .then((salario)=>{console.log(`El empleado: ${empleado} tiene un salario: ${salario}`)})
            .catch((err)=>{console.log(err)})
    })
    .catch((err)=>{console.log(err)})
```


Podemos evitar este problema haciend un return implicito de la promesa anidada y resolverlo con then.
Sin el return no podremos encadenar mas then importante.
```js

let nombre:string;
getEmpleadoSimplificado(id)
    .then(empleado =>{
        nombre = empleado;
        return getSalarioSimplificado(id)
    })    
    .then( salario => console.log(`El empleado: ${nombre} tiene un salario: ${salario}`))
    .catch(err => console.log(err)) // Me da los errores de las promesas que tengan un error

```


## Async y await
**Await** sirve para esperar a la respuesta de la promesa , para poder usar el await tiene que estar en una funcion con la palabra reservada async.
**Async:**Transforma a la funcion en una funcion asyncrona que lo que hace es que mi funcion va a devolver siempre una promesa.

El async evita utilizar la estructura .then dentro de mi funcion asyncrona ya que el await resuelve la promesa automaticamente.
Para manejar los errores dentro de una funcion asyncrona "reject".Se utiliza el try y catch.
Lo que devuelve el catch es el error de la promesa resuelta.Maneja la posibles excepciones.

 
### Manejar las promesas con Try y Catch

Para resolver este inconveniente con las promesas anidades utilizamos try y catch.Esto evita el tener que llamar a otra promesa encadenada.
