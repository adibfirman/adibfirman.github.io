

# ¡Bienvenido a React Router!

Una plantilla moderna y lista para producción para crear aplicaciones React full-stack usando React Router.

[![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Características

- 🚀 Renderizado del lado del servidor
- ⚡️ Reemplazo de módulos en caliente (HMR)
- 📦 Empaquetado y optimización de activos
- 🔄 Carga de datos y mutaciones
- 🔒 TypeScript por defecto
- 🎉 TailwindCSS para estilos
- 📖 [Documentación de React Router](https://reactrouter.com/)

## Primeros pasos

### Instalación

Instala las dependencias:

```bash
npm install
```

### Desarrollo

Inicia el servidor de desarrollo con HMR:

```bash
npm run dev
```

Tu aplicación estará disponible en `http://localhost:5173`.

## Construir para Producción

Crea una compilación para producción:

```bash
npm run build
```

## Despliegue

### Despliegue con Docker

Para compilar y ejecutar con Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

La aplicación en contenedor puede desplegarse en cualquier plataforma que soporte Docker, incluyendo:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Despliegue manual

Si estás familiarizado con el despliegue de aplicaciones Node, el servidor de aplicaciones integrado ya está listo para producción.

Asegúrate de desplegar el resultado de `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Estilos

Esta plantilla viene con [Tailwind CSS](https://tailwindcss.com/) ya configurado para una experiencia inicial predeterminada sencilla. Puedes usar cualquier framework CSS que prefieras.

---

Construido con ❤️ usando React Router.
