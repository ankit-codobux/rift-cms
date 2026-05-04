import type { Block } from 'payload'

export const Differentiators: Block = {
  slug: 'differentiators',
  interfaceName: 'DifferentiatorsBlock',
  labels: { singular: 'Differentiator', plural: 'Differentiators' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '03 — DIFFERENTIATORS' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'code', type: 'text', required: true },
        { name: 'tag', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
        { name: 'dark', type: 'checkbox', defaultValue: false },
      ],
    },
  ],
}
