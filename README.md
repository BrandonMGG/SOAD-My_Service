# Bienvenidos a la documentación del servicio de recomendaciones de platillos!

Esta página alberga cada una de las decisiones de diseño/implementación que se tomaron durante la realización del proyecto.

## 1. Lenguaje de programación.

En cuanto al lenguaje de programción utilizado para el desarrollo del servicio y la lectura de la base de datos fue JavaScript. Este es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Es muy popular y ampliamente utilizados en el desarrollo web. Se usó para el desarrollo de este proyecto debido a que JavaScript facilita la creación de una API cohesiva y consistente. Además, la amplia disponibilidad de módulos y paquetes en el ecosistema de Node.js permite una rápida implementación de funcionalidades complejas, lo que acelera el desarrollo. Además, su sintaxis moderna y legible facilita el desarrollo y simplifica el mantenimiento a largo plazo de la API.

![javascript-logo](https://github.com/BrandonMGG/SOAD-My_Service/assets/48070830/258bd954-1354-4f80-a10f-ebde2fe0e063)

## 2. Framework utilizado.

Se utiliza _Express.js_, el cual es un framework web minimalista y flexible para Node.js que simplifica el desarrollo de aplicaciones web y API. Es uno de los frameworks más populares y ampliamente utilizados en el ecosistema de Node.js. Proporciona una capa de abstracción que facilita la creación de rutas, manejo de solicitudes y respuestas y otras tareas comunes en el desarrollo web.

## 3. Tecnología.

_npm (Node Package Manager)_: Es el administrador de paquetes para Node.js. Se utiliza para instalar, compartir y administrar dependencias de proyectos Node.js. Este fue determinante en la integración de bibliotecas como la de openai para poder implementar el endpoint de recomendaciones con inteligencia artificial.

## 4. Estándares de programación.
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

## 6. Comentarios y mejoras a la arquitectura
Como mejoras a la arquitectura de este proyectoara este proyecto se tienen las siguientes: 
 
1. Para sacarle mejor provecho al API, una mejora significativa sería crear una aplicación web con interfaz gráfica, de forma que se utilice el API de manera más amigable con el usuario.

2. Es posible considerar la posibilidad de utilizar otro lenguaje de programación para el desarrollo del proyecto. JavaScript con Node.js es una opción bastante buena, sin embargo, otros lenguajes como Python podría ofrecer ventajas adicionales, en el ámbito de la inteligencia artificial y el procesamiento de datos. Además, sería buena idea explorar otros Frameworks que ofrezcan diferentes características y enfoques que podrían ser beneficiosos para el proyecto.

3. Explorar otras alternativas a endpoints de inteligencia artificial, ya que puede haber opciones que funcionen mejor con nuestra implementación.

4. Mejorar el formato de las peticiones para poder ejecutar peticiones de recomendaciones de una manera más eficiente y completa.

5. Es posible que ya estando en producción, sea necesario un sistema para obtener retroalimentación por parte de los usuarios del sistema para identificar áreas de mejora y nuevas características que puedan agregar valor.


## 7. Anexos
En este apartado se aportan las url de la solución, así como la de la documentación:
- _URL API:_ https://soad-my-service.onrender.com/recommendation || Las peticiones de recomendaciones se deben enviar mediante un método POST a esta dirección.
- _URL Documentación Swagger-OpenApi:_ https://soad-my-service.onrender.com/api-docs/swagger/ || La documentación del API realizado se encuentra en este link.
- _URL Documentación GitHub Pages:_ https://brandonmgg.github.io/SOAD-My_Service/








