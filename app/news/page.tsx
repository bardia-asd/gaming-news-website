import { Suspense } from 'react'
import { NewsPage } from '@/components/news-page'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata = {
  title: 'Latest News | PIXEL//PULSE',
  description: 'Every story, signal, and strange idea worth following in games.',
}

export default function Page() {
  return <Suspense fallback={<main className="news-page"><div className="wrap archive-section"><Skeleton className="h-12 w-64" /><Skeleton className="mt-6 h-96 w-full" /></div></main>}><NewsPage /></Suspense>
}
