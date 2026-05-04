import type { Block } from 'payload'

export const Statement: Block = {
  slug: 'statement',
  interfaceName: 'StatementBlock',
  labels: { singular: 'Statement', plural: 'Statements' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '02.5 — STATEMENT' },
    { name: 'quote', type: 'textarea', required: true },
    { name: 'meta', type: 'text', defaultValue: 'RIFT / 2026' },
    { name: 'label', type: 'text', defaultValue: 'TECHNICAL PHILOSOPHY' },
  ],
}
