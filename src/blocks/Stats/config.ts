import type { Block } from 'payload'

export const Stats: Block = {
  slug: 'stats',
  interfaceName: 'StatsBlock',
  labels: {
    singular: 'Stats Row',
    plural: 'Stats Rows',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      fields: [
        {
          name: 'key',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          required: true,
        },
      ],
    },
  ],
}
