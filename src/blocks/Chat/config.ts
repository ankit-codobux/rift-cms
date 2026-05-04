import type { Block } from 'payload'

export const Chat: Block = {
  slug: 'chat',
  interfaceName: 'ChatBlock',
  labels: { singular: 'Chat', plural: 'Chat' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '01.5 — THE RIFT' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'paragraphs',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
  ],
}
