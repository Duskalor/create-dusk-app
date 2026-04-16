#!/usr/bin/env node
import * as p from '@clack/prompts';
import degit from 'degit';
import path from 'path';
import fs from 'fs';
import { TEMPLATES, getHasEnv, validateProjectName } from './templates.js';

const GITHUB_USER = 'Duskalor';

async function main() {
  console.log('');
  p.intro('✦  create-dusk-app');

  const projectName = await p.text({
    message: '¿Cómo se llama el proyecto?',
    placeholder: 'mi-restaurante',
    validate: (v) => {
      const err = validateProjectName(v);
      if (err) return err;
      if (fs.existsSync(path.resolve(process.cwd(), v))) {
        return `La carpeta "${v}" ya existe.`;
      }
    },
  });

  if (p.isCancel(projectName)) {
    p.cancel('Operación cancelada.');
    process.exit(0);
  }

  const template = await p.select({
    message: '¿Qué template querés usar?',
    options: TEMPLATES.map((t) => ({
      value: t.value,
      label: t.label,
      hint: t.hint,
    })),
  });

  if (p.isCancel(template)) {
    p.cancel('Operación cancelada.');
    process.exit(0);
  }

  const selected = TEMPLATES.find((t) => t.value === template)!;
  const targetDir = path.resolve(process.cwd(), projectName as string);
  const repo = `${GITHUB_USER}/dusk-app#${selected.branch}`;

  const spinner = p.spinner();
  spinner.start('Clonando template...');

  try {
    const emitter = degit(repo, { cache: false, force: true });
    await emitter.clone(targetDir);
    spinner.stop('Template listo.');
  } catch (err) {
    spinner.stop('Error al clonar el template.');
    p.cancel(`No se pudo clonar ${repo}.\n${String(err)}`);
    process.exit(1);
  }

  const hasEnv = getHasEnv(selected.branch);
  p.outro(
    `✅ Proyecto creado en ./${projectName}\n\n` +
      `  Siguientes pasos:\n` +
      `  1.  cd ${projectName}\n` +
      `  2.  pnpm install\n` +
      (hasEnv ? `  3.  cp .env.example .env  →  completá las variables\n` : '') +
      `  ${hasEnv ? '4' : '3'}.  pnpm dev\n`,
  );
}

main();
