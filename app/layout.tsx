import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Playback — Gaming, with intent', description: 'Sharp stories, honest reviews, and the games worth your time.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0b0e12' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="dark"><body className="antialiased">{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>}
