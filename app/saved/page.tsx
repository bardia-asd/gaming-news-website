'use client'

import Link from 'next/link'
import { Bookmark } from 'lucide-react'
import { articles } from '@/data/articles'
import { ArticleCard } from '@/components/home-sections'
import { EmptyState } from '@/components/page-states'
import { SiteHeader } from '@/components/site-header'
import { useBookmarkStore } from '@/stores/bookmark-store'

export default function SavedPage() {
  const savedIds = useBookmarkStore((state) => state.savedIds)
  const saved = articles.filter((article) => savedIds.includes(article.id))
  return <><SiteHeader /><main className="news-page"><div className="wrap news-header"><nav className="breadcrumbs"><Link href="/">Home</Link><span>/</span><strong>Saved Articles</strong></nav><div className="news-title-row"><div><span className="eyebrow accent">YOUR LIBRARY</span><h1>Saved.</h1><p>Stories you want to come back to, kept in one place.</p></div><Bookmark aria-hidden="true" className="saved-heading-icon" /></div><section className="archive-section">{saved.length ? <div className="news-grid archive-grid">{saved.map((article) => <ArticleCard article={article} key={article.id} />)}</div> : <EmptyState message="No saved articles yet." actionLabel="Browse all news" actionHref="/news" />}</section></div></main></>
}
