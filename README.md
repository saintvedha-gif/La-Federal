# La Federal - Sitio Reutilizable para Restaurantes

Este proyecto está pensado para ser reciclable: clonas la base y cambias sólo datos y estilos para entregar un nuevo sitio.

## Ejecutar proyecto

1. Instala dependencias: `npm install`
2. Desarrollo local: `npm run dev`
3. Validar código: `npm run lint`
4. Compilar producción: `npm run build`

## Dónde cambiar contenido

La mayor parte del contenido editable está en `src/data/siteData.js`.

### Secciones principales en `src/data/siteData.js`

1. `business`
   - Cambia el nombre del negocio (`name`), texto secundario (`subtitle`), ciudad, país, dirección, horario general, teléfono y redes sociales.
   - `phoneRaw` se usa para enlaces de WhatsApp y teléfono.
   - `phoneDisplay` es el texto visible para mostrar el número.

2. `navigation`
   - Controla los links del menú superior.
   - Cada elemento tiene `to` (ruta) y `label` (texto visible).

3. `home`
   - `home.hero`: configuración del hero principal.
     - `eyebrow`, `titleTop`, `titleAccent`, `subtitle`, `info`.
     - `primaryCta` y `secondaryCta` para los botones principales.
   - `home.highlights`: bloques cortos bajo el hero.
     - Cambia íconos, textos e información breve.

4. `about`
   - `about.tag`, `about.title`, `about.titleAccent`, `about.body`.
   - `about.stats`: números y etiquetas del bloque de estadísticas.
   - `about.quote` y `about.cite` para el testimonio final.

5. `contact`
   - `contact.cards`: tarjetas de contacto con `title`, `value`, `buttonLabel` y `buttonUrl`.
   - `contact.serviceTypes`: tipos de servicio con título y descripción.
   - `contact.map.embedUrl`: URL del iframe de Google Maps.
   - `contact.weeklyHours`: horarios por día, clave `dayKey`, etiqueta `dayLabel`, `open`, `close` y `display`.
   - `contact.orderBox`: título, texto y botón de llamada a la acción.

6. `menu`
   - `menu.headerTag`, `menu.headerTitle`, `menu.headerAccent`, `menu.headerSubtitle`.
   - `menu.categories`: cada categoría define `id`, `label`, `title`, `tag`.
   - Para productos, usa `items` con `name`, `price` y `desc`.
   - La categoría `adiciones` contiene `additions` para los extras opcionales.

## Colores, fuentes y apariencia

### `src/global.css`

- Las variables de color principales están en `:root`.
  - Cambia `--cream`, `--parchment`, `--brown`, `--tan`, `--gold`, `--rust`, `--dark`, `--white`.
- El estilo global del fondo, tipografía y layout también está en este archivo.
- Si quieres cambiar colores del botón, fondo o textos, modifica las reglas existentes de clases como:
  - `.btn`, `.btn-gold`, `.btn-outline`
  - `.navbar`, `.home-neo-hero`, `.section-inner`, `.site-footer`, `.status-pill`
- Para fuentes, `index.html` carga estas familias:
  - `Cormorant Garamond`, `Josefin Sans`, `Playfair Display`
- El título del navegador está en `index.html` y puedes editarlo allí.

### `index.html`

- Cambia el `<title>` para que aparezca el nombre correcto en la pestaña.
- Si agregas fuentes nuevas, importa el CSS de Google Fonts aquí.

## Animaciones y efectos

### CSS

- Las animaciones clave están definidas en `src/global.css`.
- El sitio usa clases como `route-transition`, `data-animate`, `is-visible`, `data-delay` y animaciones en `.home-neo-*`.
- Para cambiar la velocidad o el tipo de animación, edita las animaciones en `global.css`.

### JavaScript

- `src/hooks/useRevealAnimations.js` activa animaciones cuando los elementos entran en viewport.
- Agrega `data-animate` a cualquier sección nueva para que aparezca con animación.
- El `data-delay` en los elementos controla el orden y la separación de la animación.
- `App.jsx` envuelve las rutas con la clase `route-transition` para animación de cambio de página.

## Menú y productos

### Estructura de categorías

- Todas las categorías están en `siteData.menu.categories`.
- Si quieres añadir una categoría nueva, agrégala con un `id` único.
- Ejemplo de estructura:
  - `id`: identificador usado en rutas.
  - `label`: texto del tab.
  - `title`: título dentro de la página de menú.
  - `tag`: etiqueta de resumen como "7 opciones".
  - `items`: lista de productos.

### Productos

- Cada producto en `items` debe tener:
  - `name`: nombre mostrado.
  - `price`: precio mostrado en el diseño.
  - `desc`: descripción corta.
- `ProductDetail.jsx` usa el `name` para crear la ruta con `slugify`.
- Si cambias el nombre de un producto, la URL también cambia según el `slug` generado.

### Adiciones/extras

- La categoría con `id: "adiciones"` se usa para los extras del carrito.
- Si quieres cambiar los complementos, edita esa categoría:
  - `name`, `price`.
- El detalle de producto muestra estos extras sólo si `itemHasAdditions(category.id)` retorna verdadero.

## Contacto, horarios y estado abierto

- Los horarios se usan para mostrar si el local está abierto ahora.
- El cálculo está en `src/utils/businessHours.js` y usa la zona horaria `America/Bogota`.
- Cambia `contact.weeklyHours` para ajustar los horarios de cada día.
- `business.phoneRaw` se usa para los enlaces de WhatsApp y teléfono.

## Archivos clave

- `src/data/siteData.js`
  - Fuente de verdad para contenido, productos, textos y enlaces.
- `src/global.css`
  - Estilos, colores, animaciones y layout.
- `src/pages/Home.jsx`
  - Contenido principal del home y productos destacados.
- `src/pages/Menu.jsx`
  - Lista de categorías y navegación interna del menú.
- `src/pages/ProductDetail.jsx`
  - Vista de cada producto con opción de agregar al carrito.
- `src/pages/About.jsx`
  - Historia, estadísticas y cita.
- `src/pages/Contact.jsx`
  - Horarios, mapa, contacto y botón de llamada.
- `src/components/Navbar.jsx`
  - Menú principal y estado abierto/cerrado.
- `src/components/FloatingCart.jsx`
  - Carrito flotante de pedido y enlace a WhatsApp.
- `src/hooks/useCart.js`
  - Lógica de carrito y persistencia en `localStorage`.
- `src/hooks/useRevealAnimations.js`
  - Efecto de revelado al hacer scroll.
- `src/utils/menuCart.js`
  - Funciones de ayuda para menú, slug y carrito.
- `src/utils/businessHours.js`
  - Lógica de horarios y estado abierto.

## Flujo recomendado para personalizar

1. Copia el proyecto para un nuevo cliente.
2. Cambia los datos en `src/data/siteData.js`.
3. Ajusta paleta y tipografía en `src/global.css` y `index.html`.
4. Prueba local con `npm run dev`.
5. Ejecuta `npm run lint` y `npm run build` antes de entregar.

## Notas importantes

- Si agregas una categoría de menú nueva, inclúyela en `menu.categories`.
- Si una categoría no tiene productos, deja `items` vacío y el sitio mostrará un bloque de "Próximamente".
- No cambies la lógica del carrito y las rutas a menos que quieras modificar la funcionalidad; usa `siteData.js` para casi todo el contenido.
