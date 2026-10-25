# AURA · Demo de clínica estética

Demo sectorial de Nébula Digital Studio para clínicas estéticas. La identidad visual se basa en blanco, verde salvia, fotografía cálida y tipografía editorial suave; no reutiliza el tema oscuro de Nébula.

## Desarrollo

```bash
npm install
npm run dev
```

## Personalización antes de usar con un cliente

Los textos, tratamientos, precios de muestra, fotos, contacto, reseñas ilustrativas, dirección y horarios viven en `src/data/siteData.ts`. Sustituye toda la información de ejemplo por los datos reales y verifica credenciales profesionales, precios y reseñas antes de publicar.

Las imágenes de demostración están en `public/images/`. El formulario muestra una confirmación local y no guarda datos. Configura `contact.whatsapp` en el archivo de datos para que la solicitud abra WhatsApp.

## Producción

```bash
npm run build
npm start
```
