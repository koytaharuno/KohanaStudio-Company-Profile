import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Konaha Studio - Premium Live2D Modeling',
  description: 'Elevate your virtual persona with premium Live2D models and stream assets from Konaha Studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

