import type { Block } from 'payload'

export const Approach: Block = {
  slug: 'approach',
  interfaceName: 'ApproachBlock',
  labels: { singular: 'Approach', plural: 'Approach' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '04 — APPROACH' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'phases',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'tag', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'dark', type: 'checkbox', defaultValue: false },
      ],
    },
    { name: 'metaTitle', type: 'text', required: true },
    { name: 'metaBody1', type: 'textarea', required: true },
    { name: 'metaBody2', type: 'textarea', required: true },
  ],
}
