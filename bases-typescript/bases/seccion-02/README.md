### Transpilar codigo de Ts a Js

Para transpilar un codigo typescript a javascript podemos utilizar

```
    tsc nombredearchivo
```

Para transpilar varios archivos se utiliza :"
Tener inicializado el tsconfig con esta configuracion para que transpile varios archivos.

```
tsc
```

## tsconfig.json

Es un archivo que sigue un formato de json con algunas propiedades de configuracion para typescript.

Generar un tsconfig.json con :

```
    tsc --init
```

### Modo observador

Para que automaticamente typescript transpile de ts a js cuando creamos un archivo nuevo podemos utilizar el comando:

```
    tsc --watch

    o asi: tsc -w

```
