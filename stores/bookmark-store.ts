'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { articles } from '@/data/articles'

type BookmarkState = { savedIds: string[]; toggleBookmark: (id: string) => void; isBookmarked: (id: string) => boolean; getBookmarkedArticles: () => typeof articles }
export const useBookmarkStore = create<BookmarkState>()(persist((set, get) => ({
  savedIds: [],
  toggleBookmark: (id) => set((state) => ({ savedIds: state.savedIds.includes(id) ? state.savedIds.filter((savedId) => savedId !== id) : [...state.savedIds, id] })),
  isBookmarked: (id) => get().savedIds.includes(id),
  getBookmarkedArticles: () => articles.filter((article) => get().savedIds.includes(article.id)),
}), { name: 'playback-bookmarks' }))

export const useBookmarkCount = () => useBookmarkStore((state) => state.savedIds.length)
