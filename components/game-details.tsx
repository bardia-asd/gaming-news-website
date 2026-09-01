'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Check, Heart, Monitor, Play, Shield, Star, Users } from 'lucide-react'
import { articles } from '@/data/articles'
import { relatedArticleIds, type Game } from '@/data/games' // Use the static relationship map to avoid stale helper exports
import { ArticleCard } from '@/components/home-sections'
import { useState } from 'react'

const platformIcons: Record<string, typeof Monitor> = { PC: Monitor, PS5: Play, XBX: Shield, SW: Users }

function ScoreBadge({ score }: { score?: string }) {
  if (!score) return <span className="not-rated">Not yet rated</span>
  const value = Number(score)
  return <span className={`game-score ${value >= 8 ? 'high' : value >= 5 ? 'mid' : 'low'}`}>{score}</span>
}

export function GameDetailsPage({ game }: { game: Game }) {
  const [wishlisted, setWishlisted] = useState(false)
  const relatedIds = relatedArticleIds[game.id] ?? []
  const related = articles.filter((article) => relatedIds.includes(article.id))
  const art = game.coverArt ?? game.image
  const gallery = game.screenshots ?? [game.image]

  return <main className="game-page">
    <div className="wrap game-container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#games">Games</Link><span>/</span><strong>{game.title}</strong></nav>
      <section className="game-hero">
        <div className="game-key-art"><Image src={art} alt={`${game.title} cover art`} fill priority sizes="(max-width: 800px) 100vw, 52vw" className="object-cover"/><div className="game-key-shade"/><div className="game-hero-copy"><span className="eyebrow accent">GAME SPOTLIGHT</span><h1>{game.title}</h1><div className="tag-row">{(game.genres ?? [game.genre]).map((genre) => <span className="tag" key={genre}>{genre}</span>)}</div></div></div>
        <aside className="game-info-panel">
          <button className={`wishlist-button ${wishlisted ? 'active' : ''}`} onClick={() => setWishlisted(!wishlisted)} aria-pressed={wishlisted}><Heart size={17} fill={wishlisted ? 'currentColor' : 'none'}/>{wishlisted ? 'In your wishlist' : 'Add to wishlist'}</button>
          <div className="info-list"><InfoItem label="Platforms"><div className="platforms">{game.platforms.map((platform) => { const Icon = platformIcons[platform] ?? Monitor; return <span key={platform}><Icon size={16}/>{platform}</span> })}</div></InfoItem><InfoItem label="Release date"><span className="info-value"><CalendarDays size={15}/>{game.releaseDate ?? game.release}</span></InfoItem><InfoItem label="Rating"><ScoreBadge score={game.rating}/></InfoItem>{game.developer && <InfoItem label="Developer"><span className="info-value">{game.developer}</span></InfoItem>}{game.publisher && <InfoItem label="Publisher"><span className="info-value">{game.publisher}</span></InfoItem>}</div>
        </aside>
      </section>
      <section className="game-description"><div className="description-main"><span className="eyebrow accent">THE OVERVIEW</span><h2>Into the unknown.</h2>{(game.description ?? `Discover everything ${game.title} has to offer. Follow a world built for curious players, where every encounter opens a new path forward.`).split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="game-fact"><Star size={18}/><span>Our take</span><strong>{game.rating ? `${game.rating}/10` : 'Worth watching'}</strong><small>{game.rating ? 'Critically acclaimed' : 'Anticipation is high'}</small></div></section>
      <section className="media-section"><div className="section-head"><div><span className="eyebrow accent">IN THE WORLD</span><h2>See it in motion.</h2></div><span className="muted">{gallery.length} images</span></div><div className="media-grid">{gallery.map((image, index) => <button className="media-item" key={image} aria-label={`Open screenshot ${index + 1}`}><Image src={image} alt={`${game.title} screenshot ${index + 1}`} fill sizes="(max-width: 640px) 85vw, 33vw" className="object-cover"/><span><Play size={16}/></span></button>)}</div></section>
      <section className="related-section"><div className="section-head"><div><span className="eyebrow accent">FROM THE FEED</span><h2>Related news</h2></div><Link href="/" className="view-all">Back home <ArrowLeft size={15}/></Link></div>{related.length ? <div className="news-grid">{related.map((article) => <ArticleCard article={article} compact key={article.id}/>)}</div> : <div className="empty-news">No news yet for this game.</div>}</section>
    </div>
  </main>
}

function InfoItem({ label, children }: { label: string; children: React.ReactNode }) { return <div className="info-item"><span className="info-label">{label}</span>{children}</div> }
