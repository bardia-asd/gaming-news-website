'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { reviews } from '@/data/games'
import { SiteHeader } from '@/components/site-header'

const filters = ['All reviews', '9+ scores', '8+ scores', '7+ scores']

export function ReviewsPage() {
  const [filter, setFilter] = useState('All reviews')
  const [sort, setSort] = useState('Highest rated')
  const filtered = useMemo(() => {
    const minimum = filter === '9+ scores' ? 9 : filter === '8+ scores' ? 8 : filter === '7+ scores' ? 7 : 0
    return [...reviews].filter((review) => review.score >= minimum).sort((a, b) => sort === 'Highest rated' ? b.score - a.score : a.score - b.score)
  }, [filter, sort])
  const featured = reviews[0]

  return <>
    <SiteHeader />
    <main className="reviews-page">
      <section className="wrap reviews-intro">
        <div><span className="eyebrow accent">THE VERDICT</span><h1>Reviews</h1><p>Clear opinions on the games worth your time, money, and attention.</p></div>
        <div className="reviews-total"><strong>{reviews.length}</strong><span>REVIEWS IN THE ARCHIVE</span></div>
      </section>
      <section className="wrap featured-review">
        <div className="featured-review-image"><Image src={featured.image} alt={featured.title} fill sizes="(max-width: 700px) 100vw, 62vw" priority className="object-cover" /><div className="featured-review-shade" /></div>
        <div className="featured-review-copy"><span className="eyebrow accent">FEATURED REVIEW</span><h2>{featured.title}</h2><p>{featured.verdict}</p><div className="featured-score"><strong>{featured.score.toFixed(1)}</strong><span><Star fill="currentColor" /> OUR SCORE</span></div><Link href={`/game/${featured.id}`} className="review-link">Read the review <ArrowUpRight size={16} /></Link></div>
      </section>
      <section className="wrap review-archive">
        <div className="reviews-toolbar"><div className="review-filters">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><label className="review-sort"><span>SORT</span><ChevronDown size={15} /><select value={sort} onChange={(event) => setSort(event.target.value)}><option>Highest rated</option><option>Lowest rated</option></select></label></div>
        {filtered.length ? <div className="reviews-list">{filtered.map((review) => <Link href={`/game/${review.id}`} className="archive-review group" key={review.id}><div className="archive-review-image"><Image src={review.image} alt={review.title} fill sizes="(max-width: 640px) 100vw, 260px" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="archive-review-copy"><span className="eyebrow accent">GAME REVIEW</span><h3>{review.title}</h3><p>{review.verdict}</p><span className="muted">Reviewed by {review.reviewer}</span></div><div className={`archive-score ${review.score >= 8 ? 'high' : 'mid'}`}>{review.score.toFixed(1)}</div><ArrowUpRight className="archive-arrow" size={19} /></Link>)}</div> : <div className="reviews-empty">No reviews match this score filter.</div>}
      </section>
    </main>
  </>
}
