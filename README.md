# Bienvenidos a la documantación del servicio de recomendaciones de platillos!

Esta página alberga cada una de las decisiones de diseño/implementación que se tomaron durante la realización del proyecto.

## 1. Lenguaje de programación.

En cuanto al lenguaje de programción utilizado para el desarrollo del servicio y la lectura de la base de datos fue JavaScript. Este es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Es muy popular y ampliamente utilizados en el desarrollo web.

![javascript-logo](https://github.com/BrandonMGG/SOAD-My_Service/assets/48070830/258bd954-1354-4f80-a10f-ebde2fe0e063)

## 2. Framework utilizado.

Se utiliza _Express.js_, el cual es un framework web minimalista y flexible para Node.js que simplifica el desarrollo de aplicaciones web y API. Es uno de los frameworks más populares y ampliamente utilizados en el ecosistema de Node.js. Proporciona una capa de abstracción que facilita la creación de rutas, manejo de solicitudes y respuestas y otras tareas comunes en el desarrollo web.

## 3. Tecnología.

_npm (Node Package Manager)_: Es el administrador de paquetes para Node.js. Se utiliza para instalar, compartir y administrar dependencias de proyectos Node.js. Este fue determinante en la integración de bibliotecas como la de openai para poder implementar el endpoint de recomendaciones con inteligencia artificial.

## 4. Estándares de porgramación.
Los estándares de programación para el desarrollo del servicio web se definen como sigue:

_Estructura del código:_

Siempre se utilizará una estructura de proyecto que incluya carpetas separadas para diferentes componentes.
Dividir el código en archivos pequeños para facilitar la comprensión y el mantenimiento de la aplicación.

_Nomenclatura de variables y funciones:_

Siempre utilizar nombres descriptivos y significativos para las variables y funciones de manera consistente para que se comprenda su propósito y función en el código (por ejemplo, Nombre_de_funcion) para garantizar la legibilidad y coherencia en todo el código.

_Mantenibilidad del código:_

Documentar el código utilizando comentarios claros y de tamaño reducido para explicar el propósito y el funcionamiento de las funciones y bloques complejos del código.
Procurar la reutilización de código para mejorar la mantenibilidad y la facilidad de actualización del código.
Mantener una arquitectura simple y fácil de entender que permita realizar cambios y mejoras de manera eficiente.

_Organización del código en diferentes branches de Git:_

Utilizar Git para gestionar el control de versiones del código y mantener diferentes ramas (branches) para separar el desarrollo de las diferentes características, componentes, microservicios utilizados y corrección de errores.
Seguir un flujo de trabajo simple, como Git Flow, que incluya ramas principales como master para versiones estables y develop para el desarrollo en curso.
Hacer un uso adecuado de las ramas para trabajar en nuevas funcionalidades de manera aislada antes de fusionarlas con la rama principal.

## 5. Organización/layout de los proyectos de código
Para organización del proyecto se realizaron diagramas utilizando el modelo C4 (Contexto, Contenedores, Componentes y Código) para arquitectura de software, el cual proporciona una forma escalable y jerárquica de representar la arquitectura de un sistema, desde una vista panorámica hasta los detalles de implementación a nivel de código, facilitando la comunicación y comprensión de la arquitectura del sistema entre los miembros del equipo y las partes interesadas.

Los diagramas realizados para esta implementación fueron los de contexto, contenedores y componentes; estos se muestran a continuación:

### **Diagrama de contexto:**

![diagC4Context](https://github.com/BrandonMGG/SOAD-My_Service/blob/IA-Endpoint/Diagrams/Context%20Diagram.jpg?raw=true)

### **Diagrama de contenedores:**
![diagC4Containers](https://github.com/BrandonMGG/SOAD-My_Service/blob/IA-Endpoint/Diagrams/Container%20Diagram.jpg?raw=true)

### **Diagrama de componentes:**
![diagC4Components](https://github.com/BrandonMGG/SOAD-My_Service/blob/IA-Endpoint/Diagrams/Component%20Diagram.jpg?raw=true)

## 6. Los argumentos que recibe y responde el API
### ¿Cómo usar el API?
Se debe hacer un HTTP request por medio del método POST a la siguiente url: https://soadproject1.web.app/recommendation


### _Argumentos que recibe:_ 
Mediante un post se debe especificar el tipo (corresponde a una de estas opciones: plato principal, postre, bebida), input (corresponde al nombre de: elplato, el postre, la bebida), endpoint(corresponde a una de estas opciones: estatico, dinamico, IA).
Es posible poder hacer el request de 1 o 2 recomendaciones en el body.

Ejemplo del request que recibe para dos recomendaciones:

`[{
    "tipo": "platoPrincipal",
    "input": "Pollo al curry",
     "endpoint": "estatico"
  },
  {
    "tipo": "postre",
    "input": "Tiramisú",
     "endpoint": "estatico"
  }
 ]`


### _Argumentos que responde:_ 
La respuesta es una sola cadena de texto procesado con las recomendaciones, lo cual dependerá de si es 1 o 2 recomendaciones

Ejemplo de la respuesta para un input con 2 recomendaciones:

`{
    "recomendaciones": [
        "Para el plato principal \"Pollo al curry\", te recomiendo el postre \"Pastel de chocolate\" y la bebida \"Lassi de mango\".",
        "Para el postre \"Tiramisú\", te recomiendo el plato principal \"Lasaña\" y la bebida \"Vino tinto\"."
    ]
  }`
