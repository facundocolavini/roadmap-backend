TypeScript, es un lenguaje de programación web, que nos permite crear objetos que nos servirán a lo largo de nuestro programa. Los namespaces, existen para ayudarnos en la re utilización de nuestras variables, constantes y métodos.

Puntualmente aprenderemos sobre:

Explicación del ¿por qué son necesarios los namespaces?
Crear namespaces
Multiples namespaces en un mismo proyecto
Importar namespaces
Problemática que se puede presentar utilizando un namespace.



# Creando un NameSpaces

Los namespaces  nos sirven para declarar funciones variables o lo que necesitemos y podemos exponer al mundo exterior lo que nosotros querramos compartir.



## Export y Import 
 
 Podemos utilizar archivos en otros archivos y mandarlos a llamar con import  para poder hacer esto necesitamos la palabra reservada export.


 Podemos importar por alias

 ```
 import { Hero as SuperHero } from "./classes/Hero";
 ```