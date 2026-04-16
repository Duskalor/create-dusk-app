import { describe, it, expect } from 'vitest';
import { TEMPLATES, getHasEnv, validateProjectName } from './templates.js';

describe('TEMPLATES', () => {
  it('contains exactly 4 entries', () => {
    expect(TEMPLATES).toHaveLength(4);
  });

  it('includes restaurant template', () => {
    const t = TEMPLATES.find((t) => t.value === 'restaurant');
    expect(t).toBeDefined();
    expect(t?.branch).toBe('restaurant');
    expect(t?.label).toBeTruthy();
    expect(t?.hint).toBeTruthy();
  });

  it('includes tourism template', () => {
    const t = TEMPLATES.find((t) => t.value === 'tourism');
    expect(t).toBeDefined();
    expect(t?.branch).toBe('tourism');
  });

  it('includes law template', () => {
    const t = TEMPLATES.find((t) => t.value === 'law');
    expect(t).toBeDefined();
    expect(t?.branch).toBe('law');
  });

  it('includes portfolio template as fourth entry', () => {
    const t = TEMPLATES.find((t) => t.value === 'portfolio');
    expect(t).toBeDefined();
    expect(t?.branch).toBe('portfolio');
    expect(t?.hint).toBeTruthy();
    expect(TEMPLATES[3].value).toBe('portfolio');
  });

  it('every template has value, label, hint, branch as non-empty strings', () => {
    for (const t of TEMPLATES) {
      expect(t.value).toBeTruthy();
      expect(t.label).toBeTruthy();
      expect(t.hint).toBeTruthy();
      expect(t.branch).toBeTruthy();
    }
  });
});

describe('getHasEnv', () => {
  it('returns true for restaurant', () => {
    expect(getHasEnv('restaurant')).toBe(true);
  });

  it('returns true for tourism', () => {
    expect(getHasEnv('tourism')).toBe(true);
  });

  it('returns false for law', () => {
    expect(getHasEnv('law')).toBe(false);
  });

  it('returns false for portfolio', () => {
    expect(getHasEnv('portfolio')).toBe(false);
  });
});

describe('validateProjectName', () => {
  it('returns error string for empty string', () => {
    const result = validateProjectName('');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result!.length).toBeGreaterThan(0);
  });

  it('returns error string for whitespace-only string', () => {
    const result = validateProjectName('   ');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result!.length).toBeGreaterThan(0);
  });

  it('returns undefined for valid project name', () => {
    expect(validateProjectName('my-project')).toBeUndefined();
  });

  it('returns undefined for any non-empty valid name', () => {
    expect(validateProjectName('mi-restaurante')).toBeUndefined();
    expect(validateProjectName('my_app')).toBeUndefined();
    expect(validateProjectName('app123')).toBeUndefined();
  });
});
