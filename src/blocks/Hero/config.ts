import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Internal Name',
      admin: {
        description: 'Editor-only label for identifying this hero block.',
      },
    },
    {
      name: 'headlinePrefix',
      type: 'text',
      label: 'Headline Prefix',
      required: true,
      defaultValue: 'VI BYGGER',
    },
    {
      name: 'rotatingWords',
      type: 'array',
      label: 'Rotating Words',
      minRows: 1,
      fields: [
        {
          name: 'word',
          type: 'text',
          label: 'Word',
          required: true,
        },
      ],
    },
    {
      name: 'headlineSuffix',
      type: 'text',
      label: 'Headline Suffix',
      required: true,
      defaultValue: 'MED AI. FRA BUNDEN.',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subheadline',
      required: true,
    },
    {
      name: 'meta',
      type: 'group',
      label: 'Meta Content',
      fields: [
        {
          name: 'line1',
          type: 'text',
          label: 'Meta Line 1',
          required: true,
          defaultValue: 'RIFT / 2026',
        },
        {
          name: 'line2',
          type: 'text',
          label: 'Meta Line 2',
          required: true,
          defaultValue: 'Specialudvikling. Fremtidssikret. AI i alt.',
        },
        {
          name: 'statusLabel',
          type: 'text',
          label: 'Status Label',
          required: true,
          defaultValue: 'ACCEPTING_PROJECTS',
        },
      ],
    },
  ],
}
