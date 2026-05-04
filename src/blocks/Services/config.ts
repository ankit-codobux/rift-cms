import type { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  labels: {
    singular: 'Services Section',
    plural: 'Services Sections',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Internal Name',
      admin: {
        description: 'Editor-only label for identifying this section in the page layout.',
      },
    },
    {
      name: 'sectionTag',
      type: 'text',
      label: 'Section Tag',
      defaultValue: '02 — CAPABILITIES',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'HVAD VI BYGGER',
    },
    {
      name: 'supportText',
      type: 'text',
      label: 'Support Text',
      defaultValue: 'Fem typer løsninger. Alle på THE RIFT. AI indbygget.',
    },
    {
      name: 'showAccentCard',
      type: 'checkbox',
      label: 'Show Accent Card',
      defaultValue: true,
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'Service ID',
          required: true,
          admin: {
            description: 'Stable key, e.g. "websites".',
          },
        },
        {
          name: 'number',
          type: 'text',
          label: 'Service Number',
          required: true,
          admin: {
            description: 'Display number, e.g. "01".',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'CPU', value: 'cpu' },
            { label: 'Layers', value: 'layers' },
            { label: 'Database', value: 'database' },
            { label: 'Zap', value: 'zap' },
            { label: 'Cloud', value: 'cloud' },
          ],
        },
      ],
    },
  ],
}
