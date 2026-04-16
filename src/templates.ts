export interface Template {
  value: string;
  label: string;
  hint: string;
  branch: string;
}

export const TEMPLATES: Template[] = [
  {
    value: 'restaurant',
    label: '🍽️  Restaurant Landing Page',
    hint: 'Menú, galería, reservas y WhatsApp',
    branch: 'restaurant',
  },
  {
    value: 'tourism',
    label: '🏔️  Tourism Agency',
    hint: 'Tours, galería, reservas y WhatsApp',
    branch: 'tourism',
  },
  {
    value: 'law',
    label: '⚖️  Law Firm Landing Page',
    hint: 'Estudio jurídico, áreas de práctica y contacto',
    branch: 'law',
  },
  {
    value: 'portfolio',
    label: '🧑‍💻  Portfolio',
    hint: 'Portafolio personal, skills, proyectos y contacto',
    branch: 'portfolio',
  },
];

const ENV_TEMPLATES = new Set(['restaurant', 'tourism']);

export function getHasEnv(branch: string): boolean {
  return ENV_TEMPLATES.has(branch);
}

export function validateProjectName(v: string): string | undefined {
  if (!v || !v.trim()) return 'El nombre es requerido.';
  return undefined;
}
