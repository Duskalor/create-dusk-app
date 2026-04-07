# create-dusk-app

CLI para crear landing pages profesionales con Astro + Tailwind en segundos.

```bash
npx create-dusk-app
```

## Templates disponibles

| Template | Descripción | Stack |
|---|---|---|
| `restaurant` | Menú, galería, reservas y WhatsApp | Astro + Tailwind + Sanity |
| `tourism` | Tours, galería, reservas y WhatsApp | Astro + Tailwind + Sanity |
| `law` | Estudio jurídico, áreas de práctica y contacto | Astro + Tailwind |

## Uso

```bash
npx create-dusk-app
```

El CLI te pregunta el nombre del proyecto y el template. Luego:

```bash
cd mi-proyecto
pnpm install
pnpm dev
```

Para los templates con Sanity (`restaurant`, `tourism`) también necesitás:

```bash
cp .env.example .env
# completá SANITY_PROJECT_ID y SANITY_DATASET en .env
```

## Requisitos

- Node.js >= 18
- pnpm (recomendado)

## Licencia

MIT
