# Wanderlust Labs - Explorador de Experiencias (MVP)

Este proyecto consiste en el desarrollo del MVP de un explorador de experiencias para **Wanderlust Labs**, una startup de travel-tech. La plataforma permite a los usuarios descubrir, buscar y filtrar experiencias únicas alrededor del mundo.

## 🎯 El Reto
Construir una aplicación multipágina utilizando **React y Next.js** donde los usuarios puedan explorar experiencias (desde tours gastronómicos en Bangkok hasta rutas de vela por el Adriático) sin recargar la página.

### Requisitos Principales
- **Tecnologías:** React, Next.js.
- **Funcionalidad Core:** Búsqueda y filtrado dinámico.
- **Sincronización de URL:** La búsqueda y los filtros deben vivir en la URL (ej. `/experiences?search=vela&category=adventure&destination=Croatia`). Esto permite que los enlaces sean compartibles y los usuarios aterricen directamente en una vista prefiltrada.
- **Dataset:** Array de 100 experiencias generadas con IA.

## 🎨 Referencias de Diseño (Design References)
La interfaz debe ser limpia, enfocada en el descubrimiento, e incluir:
1. Una barra de búsqueda funcional.
2. Un sistema de filtros intuitivo.
3. Visualización mediante tarjetas (cards).

*Nota: Se deben seleccionar 2 o 3 interfaces reales como referencia estética para documentar en esta sección.*

---
*Contexto para Copilot: Utiliza Next.js App Router y hooks como `useSearchParams` para gestionar el estado de la URL de forma eficiente.*
