'use client'

import { RiftLogoFooter } from '@/lib/rift-ui'

export type FooterBlockData = {
  showLogo?: boolean | null
}

export const Footer = ({ showLogo = true }: FooterBlockData) => {
  return (
    <footer className="footer">
      <div className="footer-logo-wrap">{showLogo ? <RiftLogoFooter /> : null}</div>
    </footer>
  )
}
