# <p align="center">SPACE-APP-VITE</p>

Proyecto React + Vite realizado en el **Curso de
React: Styled Components y manipulando archivos estáticos**.

![Completado](https://img.shields.io/badge/status-completado-brightgreen) 

✔️ **El proyecto del curso de React**

**Styled Components y manipulando archivos estáticos**

## Descripción
Este proyecto es una aplicación creada con React y Vite, que incluye el uso de Styled Components y manipulación de estilos estáticos. 

Se utiliza Vte para montar el servidor local, y Styled Components para dar estilos a los componentes. Además, de trabajar con archivos estáticos para poder renderizar la aplicación. Se emplea Estados para manejar el estado de cada uno de los componentes y aplicación del concepto de Prop Drilling.

## Características del Proyecto
En este proyecto se han realizado las siguientes actividades:

* Montar un servidor de desarrollo con Vite.
* Utilizar Styled-components para crear y estilizar un navbar, un banner y más.
* Diseñar e implementar componentes React para mostrar imágenes y leyendas.
* Aplicar estilos personalizados y accesibles a una galería de fotos.
* Agregar una barra lateral de imágenes populares y un pie de página.

## Creación de proyecto
Ejecutar el comando:

    npm create vite@latest

Nombre: 
    
    space-app-vite

Seleccionar:

    React
    JavaScript
Ejecutar:

    cd space-app-vite
    npm install
    npm rin dev

### Opcional
En el script del package.json se agrega `start` 

        "scripts": {
        "start": "vite",
        "dev": "vite",
        },

Se ejecuta el proyecto con:

     npm start
Inicia el proyecto en [http://localhost:5173/](http://localhost:5173/) 

## Librería requerida
Styled Components permite escribir CSS real en el JavaScript.

    npm install styled-components
Ir a documentación de [styled-components](https://styled-components.com/docs/basics)

## Instalación requerida
* [Normalize.css](https://necolas.github.io/normalize.css/)
Hace que los navegadores muestren los elementos de forma consistente y acorde con los estándares modernos.

    **Pasos:**
    1. Ingresar a [Normalize.css](https://necolas.github.io/normalize.css/).
    2. Dar clic en descargar.
    3. Seleccionar el contenido con:
    
            Ctrl + a (selecciona)

            Ctrl + v (pega)

        Se pega el dentro del index.jsx.

        *Ruta:*

            src
            ├── components
            │   ├── GlobalStyles
            │   │   ├── index.jsx
    
* Link de la carpeta de [Assets SpaceApp](https://drive.google.com/drive/folders/1Sq2S9xfNB-CMVWKvZ8nh8SYiiowV-Q8z)

* Ventana modal usando [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

    *Estructura base:*

        <dialog open>
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>



## Tecnologias
* [React + Vite](https://vitejs.dev/guide/)
* JavaScript

## Herramientas de diseño
* [Figma](https://www.figma.com/design/XNTKwHN8pHqilZFEjfkYMN/2069---SpaceApp-%7C-React%3A-styled-components-y-manipulaci%C3%B3n-de-archivos-est%C3%A1ticos?node-id=130-2593)