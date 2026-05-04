import { getPayload } from 'payload'

import { RenderBlocks } from './render-blocks'
import { CodeStream } from '@/lib/CodeStream'
import { RiftLogo, ScrollProgress } from '@/lib/rift-ui'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    limit: 1,
    depth: 2,
  })

  const page = docs[0]

  if (!page) {
    return <main>Home page not found in Payload. Create a page with slug "home".</main>
  }

  return (
    <div className="rift-site">
      <ScrollProgress />
      <CodeStream />
      <nav className="rift-nav">
        <div className="nav-inner">
          <RiftLogo />
          <div className="nav-right">
            <a href="mailto:hello@rift.agency" className="nav-mail">
              hello@rift.agency
            </a>
          </div>
        </div>
      </nav>

      <RenderBlocks blocks={page.layout} />
    </div>
  )
}
