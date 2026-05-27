# La Federal 🍽️

Plantilla reutilizable para sitios web de restaurantes.
Clona, cambia datos y estilos, y tenés un sitio nuevo listo para entregar.

## 🛠 Tecnologías
- React + Vite
- JavaScript
- CSS personalizado con variables
- Google Fonts (Cormorant Garamond, Playfair Display)

## ✨ Funcionalidades
- Menú interactivo con categorías y detalle de producto
- Carrito flotante con enlace directo a WhatsApp
- Estado abierto/cerrado según horarios reales (zona horaria configurable)
- Animaciones al hacer scroll
- Diseño 100% personalizable desde un solo archivo de datos

## 🚀 Correr el proyecto
```bash
npm install
npm run dev
```

## 🎨 Personalizar para un nuevo cliente
Casi todo el contenido se cambia en un solo lugar:
1. **Contenido y productos** → `src/data/siteData.js`
2. **Colores y tipografía** → `src/global.css`
3. **Título del navegador** → `index.html`

## 📁 Páginas
- `/` — Home
- `/menu` — Menú con categorías
- `/about` — Historia del restaurante
- `/contacto` — Horarios, mapa y contacto
