import type { Block } from 'payload'

export const Tech: Block = {
  slug: 'tech',
  interfaceName: 'TechBlock',
  labels: { singular: 'Tech', plural: 'Tech' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '06 — TECH' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'name', type: 'text', required: true }],
    },
  ],
}
