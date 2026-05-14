# Prompt de Desarrollo: Proyecto Next.js Wanderlust Explorer

Actúa como un desarrollador experto en **React y Next.js (App Router)**. Tu objetivo es ayudarme a completar el desarrollo de la plataforma "Wanderlust" siguiendo estrictamente los requisitos de las especificaciones de la PM.

## 1. Arquitectura de Páginas y Enrutamiento
Crea y estructura las siguientes rutas utilizando Next.js:
- **Home (`/`)**: Una sección Hero con un botón de llamada a la acción que navega a `/experiences`.
- **Explorador (`/experiences`)**: Una página que muestra un listado de 100 tarjetas de experiencias en una cuadrícula. Debe incluir una barra de búsqueda y dos filtros (categoría y destino).
- **Detalle (`/experiences/[id]`)**: Una página dinámica que lee el ID de la URL y muestra la información completa de la experiencia desde el dataset local.
- **Favoritos (`/favorites`)**: Una página que filtra y muestra solo las experiencias marcadas como favoritas.
- **Perfil (`/profile`)**: Una página estática con un perfil de usuario simulado y un resumen que muestre el contador total de favoritos guardados.

## 2. Gestión de Datos (Dataset)
Genera un archivo TypeScript local (`src/data/experiences.ts`) que exporte un array de **100 objetos de experiencia**. Cada objeto debe tener:
- `id` (string único).
- `title` (string).
- `description` (string largo).
- `category` (una de: Adventure, Culture, Food, Wellness, Nature).
- `destination` (Ciudad, País).
- `price` (number).
- `rating` (number).
- `imageUrl` (string, usa un placeholder como `https://picsum.photos/`).

## 3. Lógica de Búsqueda y Filtros (Sincronización con URL)
Implementa la funcionalidad de filtrado en la página `/experiences`:
- **Búsqueda**: Usa una `RegExp(term, 'i')` para comparar el término con el título de cada experiencia.
- **Filtros**: Añade dropdowns para Categoría y Destino que funcionen de forma independiente y combinada.
- **Sincronización con URL**: Usa `useSearchParams` y `usePathname` de Next.js para que los filtros activos se reflejen como query parameters. Al recargar la página, los inputs deben prerrellenarse con estos valores.

## 4. Gestión de Estado (Favoritos)
- Implementa un sistema de favoritos utilizando **únicamente `useState` nativo de React** en un nivel superior (ej. en el layout o un Context Provider si es necesario).
- **PROHIBIDO**: Usar Redux, Zustand o librerías externas de estado.
- Cada tarjeta de experiencia debe tener un icono de corazón que actúe como toggle para añadir/quitar de favoritos.

## 5. Componentes y Hooks Requeridos
Crea los siguientes elementos:
- **Componentes**: `ExperienceCard`, `SearchBar`, `FilterBar`, `Navbar` (usar `usePathname` para estilos de enlace activo).
- **Custom Hooks**: Crea `useExperiences` o `useFilters` para encapsular la lógica de filtrado.
- **Efectos**: Usa `useEffect` para sincronizar resultados o actualizar el título del documento según sea necesario.

## 6. UI y Calidad
- Asegura que la aplicación sea **totalmente responsiva** (móvil y escritorio).
- Muestra un mensaje de "No se encontraron resultados" si los filtros no devuelven nada.
- El diseño debe ser limpio, moderno y cumplir con los estándares de accesibilidad.

Por favor, comienza generando la estructura del dataset y luego procede con la implementación de los componentes principales.
