# HarenaProjectApp

## Introducción

La soledad es uno de los principales problemas sociales de España. Esta problemática ha crecido en los últimos años por efecto de la pandemia. La Fundación Harena contribuye a disminuir estos indicadores y lo hace posible gracias a la labor encomiable de los voluntarios, que le dan acompañamiento a las personas mayores de la ciudad de Málaga.

Yo formo parte de este gran equipo. He sido voluntario desde que llegue a España, hace unos cinco años. Acompañaba a Antonio, que nos dejó a los 94 años, en el año 2020. Actualmente, soy coordinador. Mi función es presentar a los voluntarios a las personas mayores, realizar un informe de la visita y dar seguimiento al voluntariado. El informe se hace de manera manual, por lo que, se pretende realizar una App, en Ionic, que permita obtener la información de la visita y generar un informe digital. 

A continuación se describirá la App con un mapa de navegación (realizado con **FigJam**).

## Mapa de navegación
<img width="500px" src="./src/assets/draftImage/navMapHarenaProjectApp.png">

## Mock up de la aplicación

En este <a href="https://youtu.be/xc6dFl5yUNM" target="_blank"> enlace </a> se podrá ver la funcionalidad de la aplicación (realizado en **Figma**).

La aplicación tendrá un login que permitirá acceder al coordinador, un screen de register y de recuperación de contraseña. Además, tendrá una pantalla (home), en la que tendrá cuatro opciones:
<ol>
  <li>CRUD de usuarios: en esta pantalla se podrá gestionar la información de los adultos mayores. </li>
  <li>CRUD de voluntarios: en esta pantalla se podrá gestionar la información de los voluntarios.</li>
  <li>Formulario de la visita: en esta pantalla se recogerá la información familiar,  social y sanitaria del adulto mayor y el resultado de la visita.</li>
  <li>Calendario: en el que se podrá agendar y organizar las visitas.</li>
</ol>

## Base de datos

La base de datos que se usará para este proyecto será FireBase y la estructura de datos será un objetos JSON, el que se puede entender como un árbol JSON alojado en la nube. A continuación se muestra un ejemplo del objeto JSON con la estructura de datos de los voluntarios:

``` json
{
  "person": {
    "id": 1,
    "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oXcTgtM39iB0JTxTCUPekAHaDt%26pid%3DApi&f=1",
    "first_name": "Edurne",
    "last_name": "Kissell",
    "gender": "Female",
    "address": {
      "street": "Fátima",
      "number": 20,
      "postalCode": "29009"
    },
    "phone": "449-353-6011",
    "email": "akissell0@state.gov",
    "userType": "Volunteer"
  }
}
```

## Landing page y python

Acceso a los repositorios de la <a href="https://github.com/AnderDeAbrisqueta/angularHarenaProject">Landing page</a> y la página de <a href="https://github.com/AnderDeAbrisqueta/pytonProject">Landing page</a>

## APK

Descarga la [APK](./app-debug.apk) de la aplicación.

## Bibliografía

**Sánchez, José L**. (2021): Aprende Ionic con Ejercicios. Leanpub.
  

