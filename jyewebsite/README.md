# Landing corporativa con Vite

Sitio de una sola página creado con React 19, TypeScript y Vite. Presenta una agencia digital con secciones de servicios, proyectos, testimonios y contacto.

## Requisitos previos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Scripts disponibles

- `npm run dev` inicia el servidor de desarrollo en modo HMR.
- `npm run lint` ejecuta ESLint con la configuración incluida.
- `npm run build` compila el proyecto (TypeScript + Vite) en `dist/`.
- `npm run preview` sirve la compilación de producción.

## Características principales

- Animaciones declarativas con `framer-motion` en héroe, servicios, proyectos y testimonios.
- Navegación sticky con scroll suave entre secciones.
- Paleta verde definida mediante CSS variables en `src/index.css`.
- Componentes modulares en `src/components/` para fácil mantenimiento.
- Configuración estricta de TypeScript con separación de `tsconfig.app.json` y `tsconfig.node.json`.

## Estructura relevante

```
src/
  App.tsx             # Ensambla el layout principal
  index.css           # Estilos globales y tokens de color
  components/
    Navbar.tsx        # Navegación principal con scroll
    Hero.tsx          # Sección hero con CTA
    Services.tsx      # Tarjetas de servicios animadas
    Projects.tsx      # Grid de proyectos destacados
    Testimonials.tsx  # Testimonios con animación in-view
    Footer.tsx        # Información de contacto
```

## Próximos pasos sugeridos

- Ajustar contenidos reales (textos, links, logos).
- Revisar la experiencia móvil con herramientas de DevTools.
- Integrar analytics o formulario de contacto según necesidades.
