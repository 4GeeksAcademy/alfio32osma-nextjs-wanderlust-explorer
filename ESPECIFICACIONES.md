# Especificación del Proyecto: Plataforma de Experiencias

Esta documentación detalla los requisitos técnicos y funcionales para el desarrollo de la plataforma de experiencias, según lo solicitado por la PM, Lea Moreau.

## Páginas Requeridas

| Ruta | Nombre | Descripción |
| :--- | :--- | :--- |
| `/` | **Home** | Sección *hero* principal con un botón de llamada a la acción que navega a `/experiences`. |
| `/experiences` | **Explorador** | Listado completo de tarjetas de experiencias. Debe incluir:<br><ul><li>Barra de búsqueda.</li><li>Al menos dos filtros: **Categoría** y **Destino**.</li><li>Sincronización con URL: La búsqueda y filtros activos deben reflejarse como *query parameters* y prerrellenar los inputs al cargar la página.</li></ul> |
| `/experiences/[id]` | **Detalle** | Muestra la información completa de una experiencia específica, obtenida del dataset local mediante su ID. |
| `/favorites` | **Favoritos** | Lista de experiencias que el usuario ha marcado como favoritas (almacenadas en el estado del componente por ahora). |
| `/profile` | **Perfil** | Página estática que muestra un perfil de usuario simulado y un resumen con el número total de favoritos guardados. |

## Comportamiento de la Búsqueda y Filtros

* **Búsqueda:** Debe filtrar las experiencias cuyo título coincida con el término ingresado.
* **Lógica:** Se debe utilizar una expresión regular (*regex*) *case-insensitive*. Ejemplo: `/term/i`.
* **Filtros:** Los filtros por **Categoría** y **Destino** deben funcionar de forma independiente y combinarse con la lógica de la barra de búsqueda.

## Dataset

Se requiere la generación de un array de **100 objetos de experiencia** guardado en un archivo TypeScript local. Cada objeto debe cumplir con la siguiente estructura mínima:

* `id`: Identificador único.
* `title`: Título de la experiencia.
* `description`: Descripción detallada.
* `category`: Una de las siguientes: *Adventure, Culture, Food, Wellness, Nature*.
* `destination`: Ciudad y País.
* `price`: Valor numérico.
* `rating`: Puntuación.
* `imageUrl`: URL de marcador de posición (*placeholder*).

## Sistema de Favoritos

* **Interfaz:** Un icono de corazón en cada tarjeta para activar/desactivar la experiencia de la lista de favoritos.
* **Estado:** Los favoritos se gestionan mediante un `useState` de nivel superior y se distribuyen vía *props* a los componentes necesarios.
* **Persistencia:** No se requiere persistencia de datos (base de datos o localStorage) en esta fase inicial.
