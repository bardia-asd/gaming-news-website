'use client'

import Link from 'next/link'
import { AlertCircle, ArrowLeft, Bookmark, FileQuestion, RefreshCw } from 'lucide-react'

type StateProps = { message: string; actionLabel?: string; actionHref?: string; onAction?: () => void }
export function EmptyState({ message, actionLabel, actionHref, onAction }: StateProps) { return <div className="page-state"><Bookmark aria-hidden="true" /><h2>{message}</h2>{actionHref ? <Link href={actionHref} className="state-action">{actionLabel ?? 'Browse all news'} <ArrowLeft size={15} /></Link> : onAction ? <button className="state-action" onClick={onAction}>{actionLabel ?? 'Try again'} <RefreshCw size={15} /></button> : null}</div> }
export function ErrorState({ onAction }: { onAction?: () => void }) { return <div className="page-state"><AlertCircle aria-hidden="true" /><h2>Something went wrong loading this page.</h2><button className="state-action" onClick={onAction}>{'Try again'} <RefreshCw size={15} /></button></div> }
export function NotFoundPage({ kind = 'page' }: { kind?: string }) { return <main className="page-state full-state"><FileQuestion aria-hidden="true" /><span className="eyebrow accent">404 / NOT FOUND</span><h1>This {kind} slipped into another dimension.</h1><Link href="/" className="state-action">Back home <ArrowLeft size={15} /></Link></main> }
