import type { Block } from 'payload'

export const Cta: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  labels: {
    singular: 'CTA',
    plural: 'CTAs',
  },
  fields: [
    { name: 'sectionTag', type: 'text', label: 'Section Tag', defaultValue: '08 — FREMAD' },
    { name: 'title', type: 'text', label: 'Title', required: true },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphs',
      minRows: 1,
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
  ],
}
