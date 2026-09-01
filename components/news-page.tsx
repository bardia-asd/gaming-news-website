'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Filter, Search, SlidersHorizontal, X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { articles, type Article } from '@/data/articles'
import { ArticleCard } from '@/components/home-sections'

const categories = ['All', 'FPS', 'RPG', 'INDIE', 'ESPORTS', 'HARDWARE', 'CULTURE', 'NEWS']
const pageSize = 6

const archiveArticles: Article[] = Array.from({ length: 4 }, (_, batch) => articles.map((article) => ({
  ...article,
  id: `${article.id}-${batch}`,
  title: batch === 0 ? article.title : `${article.title} — The ${batch === 1 ? 'follow-up' : batch === 2 ? 'deep dive' : 'latest report'}`,
  href: article.href,
  date: batch === 0 ? article.date : `Aug ${28 - batch}, 2026`,
  time: batch === 0 ? article.time : `${batch + 2}d ago`,
}))).flat()

function getParam(value: string | null, fallback: string) { return value ? value.toUpperCase() : fallback }

export function NewsPage() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const category = getParam(params.get('category'), 'ALL')
  const sort = params.get('sort') || 'newest'
  const dateRange = params.get('date') || 'all'
  const page = Math.max(1, Number(params.get('page') || '1'))
  const query = params.get('q') || ''
  const [search, setSearch] = useState(query)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const updateParams = (updates: Record<string, string | null>) => {
    const next = new URLSearchParams(params.toString())
    Object.entries(updates).forEach(([key, value]) => value ? next.set(key, value) : next.delete(key))
    router.push(`${pathname}?${next.toString()}`)
  }

  const filtered = useMemo(() => {
    let result = archiveArticles.filter((article) => category === 'ALL' || article.category === category)
    if (query) result = result.filter((article) => `${article.title} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase()))
    if (dateRange === 'today') result = result.filter((article) => article.date.includes('Sep 01'))
    if (dateRange === 'week') result = result.filter((article) => !article.date.includes('Aug 2'))
    if (sort === 'oldest') result = [...result].reverse()
    if (sort === 'popular') result = [...result].sort((a, b) => Number(b.id.split('-')[0]) - Number(a.id.split('-')[0]))
    return result
  }, [category, dateRange, query, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const visible = filtered.slice((safePage - 1) * pageSize, safePage * pageSize)
  const activeCount = [category !== 'ALL', sort !== 'newest', dateRange !== 'all', Boolean(query)].filter(Boolean).length

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault()
    updateParams({ q: search.trim() || null, page: null })
  }

  return <main className="news-page">
    <header className="wrap news-header">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><strong>News</strong></div>
      <div className="news-title-row"><div><span className="eyebrow accent">THE ARCHIVE</span><h1>Latest News</h1><p>Every story, signal, and strange idea worth following in games.</p></div><span className="result-count">{filtered.length.toLocaleString()} articles</span></div>
    </header>

    <section className="wrap news-controls" aria-label="News filters">
      <div className="category-pills">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => updateParams({ category: item === 'All' ? null : item.toLowerCase(), page: null })}>{item}</button>)}</div>
      <div className="control-row"><form className="news-search" onSubmit={submitSearch}><Search size={16}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the archive" aria-label="Search the archive"/></form><label className="select-control"><span>Sort</span><select value={sort} onChange={(event) => updateParams({ sort: event.target.value === 'newest' ? null : event.target.value, page: null })}><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="popular">Most Popular</option></select></label><label className="select-control date-select"><span>When</span><select value={dateRange} onChange={(event) => updateParams({ date: event.target.value === 'all' ? null : event.target.value, page: null })}><option value="all">All time</option><option value="today">Today</option><option value="week">This week</option></select></label><button className="filter-trigger" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={16}/> Filters{activeCount > 0 && <b>{activeCount}</b>}</button></div>
    </section>

    <section className="wrap active-filter-row" aria-label="Active filters">{category !== 'ALL' && <FilterChip label={`Category: ${category}`} onRemove={() => updateParams({ category: null, page: null })}/>} {sort !== 'newest' && <FilterChip label={`Sort: ${sort}`} onRemove={() => updateParams({ sort: null, page: null })}/>} {dateRange !== 'all' && <FilterChip label={`Date: ${dateRange}`} onRemove={() => updateParams({ date: null, page: null })}/>} {query && <FilterChip label={`Search: ${query}`} onRemove={() => { setSearch(''); updateParams({ q: null, page: null }) }}/>} {activeCount > 1 && <button className="clear-filters" onClick={() => router.push(pathname)}>Clear all</button>}</section>

    <section className="wrap archive-section"><div className="archive-heading"><span className="eyebrow accent">{visible.length ? `SHOWING ${((safePage - 1) * pageSize) + 1}–${Math.min(safePage * pageSize, filtered.length)}` : 'NO MATCHES'}</span><span className="muted">Page {safePage} of {totalPages}</span></div>{visible.length ? <div className="news-grid archive-grid">{visible.map((article) => <ArticleCard key={article.id} article={article}/>)}</div> : <div className="empty-state"><Search size={28}/><h2>Nothing in the feed yet.</h2><p>Try another category or clear your filters to see more stories.</p><button onClick={() => router.push(pathname)}>Clear filters</button></div>}</section>

    <nav className="wrap pagination" aria-label="Pagination"><button disabled={safePage === 1} onClick={() => updateParams({ page: String(safePage - 1) })}><ChevronLeft size={16}/> Prev</button><div>{Array.from({ length: totalPages }, (_, index) => index + 1).slice(0, 7).map((number) => <button key={number} className={number === safePage ? 'current' : ''} onClick={() => updateParams({ page: String(number) })}>{number}</button>)}</div><button disabled={safePage === totalPages} onClick={() => updateParams({ page: String(safePage + 1) })}>Next <ChevronRight size={16}/></button></nav>

    {filtersOpen && <div className="filter-overlay" role="dialog" aria-modal="true" aria-label="Filters"><div className="filter-sheet"><button className="sheet-close" onClick={() => setFiltersOpen(false)}><X size={19}/></button><span className="eyebrow accent">REFINE THE ARCHIVE</span><h2>Filters</h2><div className="sheet-group"><span>Category</span>{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => updateParams({ category: item === 'All' ? null : item.toLowerCase(), page: null })}>{item}</button>)}</div><div className="sheet-group"><span>Sort by</span>{['newest', 'oldest', 'popular'].map((item) => <button key={item} className={sort === item ? 'active' : ''} onClick={() => updateParams({ sort: item === 'newest' ? null : item, page: null })}>{item}</button>)}</div><button className="apply-filters" onClick={() => setFiltersOpen(false)}>Done</button></div></div>}
  </main>
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) { return <span className="filter-chip">{label}<button onClick={onRemove} aria-label={`Remove ${label}`}><X size={13}/></button></span> }
