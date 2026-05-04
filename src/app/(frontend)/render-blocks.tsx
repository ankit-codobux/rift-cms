import { Approach } from '@/blocks/Approach'
import { Chat } from '@/blocks/Chat'
import { CaseStudies } from '@/blocks/CaseStudies'
import { Cta } from '@/blocks/Cta'
import { Differentiators } from '@/blocks/Differentiators'
import { Footer } from '@/blocks/Footer'
import { Hero } from '@/blocks/Hero'
import { Process } from '@/blocks/Process'
import { Services } from '@/blocks/Services'
import { Stats } from '@/blocks/Stats'
import { Statement } from '@/blocks/Statement'
import { Team } from '@/blocks/Team'
import { Tech } from '@/blocks/Tech'
import type { Page } from '@/payload-types'

type Blocks = Page['layout']

export function RenderBlocks({ blocks }: { blocks: Blocks }) {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block, index) => {
        const key = block.id ?? `${block.blockType}-${index}`

        switch (block.blockType) {
          case 'hero':
            return <Hero key={key} {...block} />
          case 'stats':
            return <Stats key={key} {...block} />
          case 'process':
            return <Process key={key} {...block} />
          case 'chat':
            return <Chat key={key} {...block} />
          case 'services':
            return <Services key={key} {...block} />
          case 'statement':
            return <Statement key={key} {...block} />
          case 'differentiators':
            return <Differentiators key={key} {...block} />
          case 'approach':
            return <Approach key={key} {...block} />
          case 'caseStudies':
            return <CaseStudies key={key} {...block} />
          case 'tech':
            return <Tech key={key} {...block} />
          case 'team':
            return <Team key={key} {...block} />
          case 'cta':
            return <Cta key={key} {...block} />
          case 'footer':
            return <Footer key={key} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
