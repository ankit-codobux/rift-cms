import type { Block } from 'payload'

export const Footer: Block = {
  slug: 'footer',
  interfaceName: 'FooterBlock',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'showLogo',
      type: 'checkbox',
      label: 'Show Animated Footer Logo',
      defaultValue: true,
    },
  ],
}
