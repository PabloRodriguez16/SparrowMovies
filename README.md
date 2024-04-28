# SparrowMovies

# Mi Primer Proyecto Personal Full-Stack

## Resumen

Este proyecto es una aplicación web que simula una plataforma de streaming de películas. Es mi primera experiencia trabajando en el backend de una aplicación. La página web consta de diferentes secciones, que incluyen una para agregar películas, otra que muestra las tecnologías utilizadas y una sección de recomendaciones para plataformas de streaming reales.

## Características

- **Buscar Películas**: Los usuarios pueden buscar películas por título.
- **Agregar Películas**: Los usuarios pueden agregar nuevas películas a la base de datos.
- **Vitrina de Tecnología**: Detalles sobre las tecnologías utilizadas en el proyecto.
- **Recomendaciones de Streaming**: Proporciona recomendaciones para plataformas de streaming populares.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Base de Datos**: MongoDB
- **Llamadas a API**: Axios
- **Otras Herramientas**: Git, GitHub

## Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias generales ejecutando `npm install`.
3. Instala las dependencias necesarias ejecutando `npm install` en el directorio de back y en de front respectivamente.
4. En la sección del back encontraras un archivo llamado `.env.example`. Este tiene que ser renombrado como simplemente .env
5. En este ultimo tendrás una variable de entorno la cual es la conección con la BDD de mongoDB. En este encontrarás secciones `< password >` las cuales deben ser
llenadas con sus respectivos datos. 
6. A continuación dejaré una lista de películas las cuales pueden agregar directamente desde mongoDB o desde la propia sección de agregar películas mas adelante.

# Películas:

° [
  {
    "title": "Star Wars: Episode IV - A New Hope",
    "year": 1977,
    "director": "George Lucas",
    "duration": "2h 1min",
    "genre": ["Sci-Fi", "Action", "Adventure", "Fantasy"],
    "rate": 8.7,
    "poster": "https://m.media-amazon.com/images/M/MV5BMDM1NmMxMzItYWUzMC00Yzc2LTk4MzctOTdkNDVhODY2N2MxXkEyXkFqcGdeQXVyNDQ0Mjg4NTY@._V1_.jpg"
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "director": "Peter Jackson",
    "duration": "2h 58min",
    "genre": ["Adventure", "Drama", "Fantasy"],
    "rate": 8.8,
    "poster": "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg"
  },

  {
    "title": "Oppenheimer",
    "year": 2023,
    "director": "Christopher Nolan",
    "duration": "3h",
    "genre": ["Biography", "Drama", "Thriller"],
    "rate": 9.8,
    "poster": "https://m.media-amazon.com/images/I/81XXxWVKbOL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
  }
]

7. Inicia el servidor backend usando `npm start`.

8. Abre la página utilizando `npm start` para que utilice live-server.

## Contacto

Si deseas ponerte en contacto conmigo, puedes encontrarme en LinkedIn:

[LinkedIn](https://www.linkedin.com/in/pablo-rodr%C3%ADguez-2008b7298/)

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, haz un fork del repositorio y crea una nueva pull request. Alternativamente, puedes abrir un issue para reportar errores o sugerir nuevas funcionalidades.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.