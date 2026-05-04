import type { Block } from 'payload'

export const Process: Block = {
  slug: 'process',
  interfaceName: 'ProcessBlock',
  labels: { singular: 'Process', plural: 'Process' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '01 — PROCESS' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'tabs',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'id', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    { name: 'caption', type: 'text', defaultValue: 'AI system demonstration / Live processing example' },
    { name: 'leftText', type: 'textarea', required: true },
    { name: 'rightText', type: 'textarea', required: true },
  ],
}
