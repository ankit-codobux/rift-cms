import type { Block } from 'payload'

export const Team: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  labels: { singular: 'Team', plural: 'Team' },
  fields: [
    { name: 'sectionTag', type: 'text', defaultValue: '07 — TEAM' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'members',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'role', type: 'text', required: true },
        { name: 'name', type: 'text', required: true },
        {
          name: 'paragraphs',
          type: 'array',
          minRows: 1,
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
        { name: 'initials', type: 'text', required: true },
      ],
    },
  ],
}
