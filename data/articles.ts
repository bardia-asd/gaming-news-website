export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'image'; src: string; alt: string; caption: string }
  | { type: 'list'; items: string[] }

export type Article = { id: string; category: string; title: string; excerpt: string; image: string; author: string; date: string; time: string; href: string; content?: ArticleBlock[] }

const articleContent = {
  '1': [
    { type: 'paragraph' as const, text: 'We stand at the edge of a creative cliff. For the first time in a decade, the conversation around games isn\'t about technology or processing power—it\'s about ambition, storytelling, and the willingness to fail in interesting ways. The next generation of games isn\'t defined by when they release. It\'s defined by what they dare to attempt.' },
    { type: 'heading' as const, text: 'The Narrative Shift' },
    { type: 'paragraph' as const, text: 'From Zenith\'s uncontrollable branching narratives to the intimate storytelling of Hollow Hearts, 2026 is proving that we\'ve finally learned how to let stories breathe. The technical barriers have fallen. What remains are the human ones.' },
    { type: 'quote' as const, text: 'Every choice should matter. When a player realizes their decision shaped the world, they stop playing a game and start living in it.', cite: 'Dr. Sarah Winters, Narrative Director, Zenith Games' },
    { type: 'image' as const, src: 'https://images.unsplash.com/photo-1538481143235-1d71bcdd2d0d?auto=format&fit=crop&w=1200&q=80', alt: 'A stunning game environment', caption: 'The visual fidelity of next-gen titles now matches the emotional depth of their stories.' },
    { type: 'heading' as const, text: 'Why Now?' },
    { type: 'paragraph' as const, text: 'The convergence is simple: tools have matured, teams are distributed globally, and audiences are demanding better. AAA studios finally have the infrastructure to take risks. Indies have the platforms to reach millions. The result? Games that wouldn\'t have been greenlit five years ago are now launching to millions of players.' },
    { type: 'list' as const, items: [ 'Unreal Engine 5.4\'s new narrative tools democratized branching storytelling', 'Cloud technology enabled seamless global co-development', 'Player communities became part of the creative process', 'Subscription services gave developers runway to experiment' ] },
    { type: 'paragraph' as const, text: 'The next generation isn\'t about graphics or frame rates. It\'s about freedom—freedom to fail, to experiment, and to trust that audiences will follow. The games that defined 2026 prove we\'re ready.' },
  ],
}

export const articles: Article[] = [
  { id: '1', category: 'FEATURED', title: 'The next generation of games is already here', excerpt: 'From impossible worlds to stories that remember you, these are the releases changing how we play.', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85', author: 'Maya Chen', date: 'Sep 01, 2026', time: '3h ago', href: '/article/1', content: articleContent['1'] },
  { id: '2', category: 'RPG', title: 'Eclipse of Asteria makes every choice feel permanent', excerpt: 'A gorgeous space opera with consequences that land.', image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=900&q=80', author: 'Jon Bell', date: 'Sep 01, 2026', time: '5h ago', href: '/article/2' },
  { id: '3', category: 'HARDWARE', title: 'The quiet revolution in handheld gaming', excerpt: 'Why the best screen in your house might fit in a backpack.', image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=900&q=80', author: 'Lena Ortiz', date: 'Aug 31, 2026', time: '1d ago', href: '/article/3' },
  { id: '4', category: 'INDIE', title: 'Small teams, enormous ideas', excerpt: 'Meet the creators building the weirdest games of the year.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80', author: 'Ravi Shah', date: 'Aug 31, 2026', time: '1d ago', href: '/article/4' },
  { id: '5', category: 'ESPORTS', title: 'Inside the new era of competitive play', excerpt: 'The players and coaches rewriting the rulebook.', image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80', author: 'Sam Reed', date: 'Aug 30, 2026', time: '2d ago', href: '/article/5' },
  { id: '6', category: 'CULTURE', title: 'The art of making a memorable game menu', excerpt: 'A visual history of the screen we see before play begins.', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80', author: 'Maya Chen', date: 'Aug 30, 2026', time: '2d ago', href: '/article/6' },
  { id: '7', category: 'NEWS', title: 'The studios betting on co-op again', excerpt: 'Playing together is having a very good year.', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80', author: 'Jon Bell', date: 'Aug 29, 2026', time: '3d ago', href: '/article/7' },
]

export const trending = [articles[1], articles[4], articles[2], articles[6], articles[3]]
export const hero = articles[0]
