import { Skeleton } from '@/components/ui/skeleton'
export default function Loading() { return <main className="article-page"><div className="wrap loading-stack article-loading"><Skeleton className="h-5 w-32" /><Skeleton className="h-24 w-full max-w-4xl" /><Skeleton className="h-5 w-64" /><Skeleton className="h-96 w-full max-w-5xl" /></div></main> }
