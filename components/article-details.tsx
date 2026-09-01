'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Copy, Link2, Send, Share2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Article, ArticleBlock } from '@/data/articles'
import { ArticleCard } from '@/components/home-sections'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
}

export function ArticleDetails({ article, related }: { article: Article; related: Article[] }) {
  return <>
    <ReadingProgress />
    <main className="article-page">
      <div className="wrap article-container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/news">News</Link><span>/</span><span>{article.category}</span><span>/</span><strong>{article.title}</strong></nav>
        <header className="article-header">
          <span className="eyebrow accent">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </header>
        <figure className="article-hero"><Image src={article.image} alt={article.title} fill priority sizes="(max-width: 900px) 100vw, 1120px" className="object-cover" /><figcaption>Image: Playback Media / Archive</figcaption></figure>
        <AuthorMeta article={article} />
        <ArticleBody blocks={article.content || []} />
      </div>
      <RelatedArticles articles={related} />
    </main>
  </>
}

function AuthorMeta({ article }: { article: Article }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => { await navigator.clipboard?.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <div className="author-meta"><div className="author-person"><div className="avatar">MC</div><div><strong>{article.author}</strong><span>Senior Editor · Published {article.date}</span></div></div><div className="share-actions" aria-label="Share article"><span>SHARE</span><button aria-label="Share article"><Share2 size={16}/></button><button aria-label="Send article"><Send size={16}/></button><button aria-label="Copy article link" onClick={copy}>{copied ? <Check size={16}/> : <Copy size={16}/>}</button></div></div>
}

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return <article className="article-body-rich">{blocks.map((block, index) => {
    if (block.type === 'paragraph') return <p key={index}>{block.text}</p>
    if (block.type === 'heading') return <h2 key={index}>{block.text}</h2>
    if (block.type === 'quote') return <blockquote key={index}><p>{block.text}</p><cite>— {block.cite}</cite></blockquote>
    if (block.type === 'image') return <figure className="inline-figure" key={index}><Image src={block.src} alt={block.alt} width={1200} height={675} /><figcaption>{block.caption}</figcaption></figure>
    return <ul key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ul>
  })}</article>
}

function RelatedArticles({ articles }: { articles: Article[] }) {
  return <section className="related-section"><div className="wrap"><div className="section-head"><div><span className="eyebrow accent">KEEP READING</span><h2>Related stories</h2></div><Link href="/news" className="view-all">View all <ArrowLeft size={15}/></Link></div><div className="related-grid">{articles.map(article => <ArticleCard key={article.id} article={article} />)}</div></div></section>
}

export function ArticleFooter() { return <footer className="footer"><div className="wrap footer-grid"><div><Link href="/" className="wordmark"><span>PX</span> / PLAYBACK</Link><p>Stories for people who play.</p></div><div><span className="eyebrow">EXPLORE</span><Link href="/news">News</Link><Link href="/reviews">Reviews</Link><Link href="/games">Games</Link></div><div><span className="eyebrow">FOLLOW</span><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">Bluesky</a></div></div><div className="wrap footer-bottom"><span>© 2026 Playback Media</span><span>Built for the next level.</span></div></footer> }

export function ShareIcon({ label }: { label: string }) { return <span aria-label={label}><Link2 size={15}/></span> }
