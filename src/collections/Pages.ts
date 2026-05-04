import type { CollectionConfig } from 'payload'

import { Approach } from '@/blocks/Approach/config'
import { Chat } from '@/blocks/Chat/config'
import { CaseStudies } from '@/blocks/CaseStudies/config'
import { Cta } from '@/blocks/Cta/config'
import { Differentiators } from '@/blocks/Differentiators/config'
import { Footer } from '@/blocks/Footer/config'
import { Hero } from '@/blocks/Hero/config'
import { Process } from '@/blocks/Process/config'
import { Services } from '@/blocks/Services/config'
import { Stats } from '@/blocks/Stats/config'
import { Statement } from '@/blocks/Statement/config'
import { Team } from '@/blocks/Team/config'
import { Tech } from '@/blocks/Tech/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        Hero,
        Stats,
        Process,
        Chat,
        Services,
        Statement,
        Differentiators,
        Approach,
        CaseStudies,
        Tech,
        Team,
        Cta,
        Footer,
      ],
    },
  ],
}
