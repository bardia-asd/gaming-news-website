import { notFound } from 'next/navigation'
import { getGame } from '@/data/games'
import { GameDetailsPage } from '@/components/game-details'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const game = getGame(id)
  if (!game) notFound()
  return <GameDetailsPage game={game} />
}
