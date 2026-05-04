import type { Block } from 'payload'

export const CaseStudies: Block = {
  slug: 'caseStudies',
  interfaceName: 'CaseStudiesBlock',
  labels: {
    singular: 'Case Studies',
    plural: 'Case Studies',
  },
  fields: [
    {
      name: 'sectionTag',
      type: 'text',
      label: 'Section Tag',
      defaultValue: '05 — WORK',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'UDVALGTE PROJEKTER',
    },
    {
      name: 'recordingTypes',
      type: 'array',
      label: 'Recording Types',
      minRows: 1,
      fields: [
        { name: 'id', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'cases',
      type: 'array',
      label: 'Cases',
      minRows: 1,
      fields: [
        { name: 'id', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'project', type: 'text', required: true },
        { name: 'sector', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'challenge', type: 'textarea', required: true },
        { name: 'solution', type: 'textarea', required: true },
        { name: 'deployed', type: 'text', required: true },
        { name: 'duration', type: 'text', required: true },
        { name: 'type', type: 'text', required: true },
        {
          name: 'images',
          type: 'array',
          label: 'Images',
          minRows: 1,
          fields: [{ name: 'url', type: 'text', required: true }],
        },
      ],
    },
  ],
}
