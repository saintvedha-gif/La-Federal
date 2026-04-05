# La Federal - Sitio Reutilizable para Restaurantes

Este proyecto esta preparado para ser reciclable: puedes clonar la base y cambiar solo datos para crear la web de otro restaurante.

## Ejecutar proyecto

1. Instala dependencias: npm install
2. Desarrollo local: npm run dev
3. Validar codigo: npm run lint
4. Compilar produccion: npm run build

## Donde cambiar contenido

Toda la informacion editable se centraliza en [src/data/siteData.js](src/data/siteData.js).

Edita estas secciones:

1. business
- Nombre del negocio, ciudad, direccion, horario, telefono y redes.

2. navigation
- Enlaces y textos del menu superior.

3. home
- Hero principal y bloques destacados.

4. about
- Historia, estadisticas y cita.

5. contact
- Tarjetas de contacto y bloque de llamada a la accion.

6. menu
- Encabezado del menu y todas las categorias, productos, precios y descripciones.

## Estructura importante

1. [src/data/siteData.js](src/data/siteData.js)
- Fuente unica de datos del sitio.

2. [src/components/Navbar.jsx](src/components/Navbar.jsx)
- Renderiza la navegacion desde siteData.

3. [src/pages/Home.jsx](src/pages/Home.jsx)
4. [src/pages/About.jsx](src/pages/About.jsx)
5. [src/pages/Contact.jsx](src/pages/Contact.jsx)
6. [src/pages/Menu.jsx](src/pages/Menu.jsx)
- Todas las paginas leen contenido desde siteData.

7. [src/global.css](src/global.css)
- Estilos globales, layout y responsive para todas las paginas.

## Flujo recomendado para vender y reciclar

1. Duplica este proyecto para un nuevo cliente.
2. Cambia solo [src/data/siteData.js](src/data/siteData.js).
3. Ajusta colores/fuentes en [src/global.css](src/global.css) si el cliente tiene otra marca.
4. Ejecuta npm run lint y npm run build antes de entregar.

## Notas

- Si agregas una nueva categoria de menu, solo debes incluirla en menu.categories dentro de siteData.
- Si una categoria aun no tiene productos, puedes usar comingSoon: true.
