export type Article = { id: string; category: string; title: string; excerpt: string; image: string; author: string; date: string; time: string; href: string }

export const articles: Article[] = [
  { id: '1', category: 'FEATURED', title: 'The next generation of games is already here', excerpt: 'From impossible worlds to stories that remember you, these are the releases changing how we play.', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85', author: 'Maya Chen', date: 'Sep 01, 2026', time: '3h ago', href: '/article/1' },
  { id: '2', category: 'RPG', title: 'Eclipse of Asteria makes every choice feel permanent', excerpt: 'A gorgeous space opera with consequences that land.', image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=900&q=80', author: 'Jon Bell', date: 'Sep 01, 2026', time: '5h ago', href: '/article/2' },
  { id: '3', category: 'HARDWARE', title: 'The quiet revolution in handheld gaming', excerpt: 'Why the best screen in your house might fit in a backpack.', image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=900&q=80', author: 'Lena Ortiz', date: 'Aug 31, 2026', time: '1d ago', href: '/article/3' },
  { id: '4', category: 'INDIE', title: 'Small teams, enormous ideas', excerpt: 'Meet the creators building the weirdest games of the year.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80', author: 'Ravi Shah', date: 'Aug 31, 2026', time: '1d ago', href: '/article/4' },
  { id: '5', category: 'ESPORTS', title: 'Inside the new era of competitive play', excerpt: 'The players and coaches rewriting the rulebook.', image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80', author: 'Sam Reed', date: 'Aug 30, 2026', time: '2d ago', href: '/article/5' },
  { id: '6', category: 'CULTURE', title: 'The art of making a memorable game menu', excerpt: 'A visual history of the screen we see before play begins.', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80', author: 'Maya Chen', date: 'Aug 30, 2026', time: '2d ago', href: '/article/6' },
  { id: '7', category: 'NEWS', title: 'The studios betting on co-op again', excerpt: 'Playing together is having a very good year.', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80', author: 'Jon Bell', date: 'Aug 29, 2026', time: '3d ago', href: '/article/7' },
]

export const trending = [articles[1], articles[4], articles[2], articles[6], articles[3]]
export const hero = articles[0]
