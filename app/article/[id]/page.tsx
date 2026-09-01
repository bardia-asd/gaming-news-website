import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { ArticleDetails, ArticleFooter } from '@/components/article-details'
import { articles } from '@/data/articles'

export function generateStaticParams() { return articles.map(article => ({ id: article.id })) }

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles.find(item => item.id === id)
  if (!article) notFound()
  const related = articles.filter(item => item.id !== article.id).slice(0, 3)
  return <><SiteHeader /><ArticleDetails article={article} related={related} /><ArticleFooter /></>
}
