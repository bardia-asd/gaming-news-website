export type Game = { id: string; title: string; image: string; platforms: string[]; release: string; genre: string; days?: string; rating?: string }
export const upcomingGames: Game[] = [
 { id:'u1', title:'Neon Protocol', image:'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=700&q=85', platforms:['PC','PS5'], release:'Sep 18, 2026', genre:'Action RPG', days:'17 DAYS' },
 { id:'u2', title:'Hollow Crown', image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85', platforms:['PC','XBX'], release:'Oct 02, 2026', genre:'Dark Fantasy' },
 { id:'u3', title:'Driftline', image:'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=85', platforms:['PS5','XBX'], release:'Oct 21, 2026', genre:'Racing' },
 { id:'u4', title:'Starfall Tactics', image:'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=85', platforms:['PC','SW'], release:'Nov 06, 2026', genre:'Strategy' },
]
export const popularGames: Game[] = [
 {id:'p1',title:'The Last Signal',image:'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=700&q=85',platforms:['PC','PS5'],release:'Out now',genre:'Survival',rating:'9.1'},
 {id:'p2',title:'Mythos: Reborn',image:'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=700&q=85',platforms:['PC','XBX'],release:'Out now',genre:'RPG',rating:'8.7'},
 {id:'p3',title:'Rift Runners',image:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=85',platforms:['PC','SW'],release:'Out now',genre:'Co-op',rating:'8.4'},
 {id:'p4',title:'Emberwake',image:'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=700&q=85',platforms:['PS5'],release:'Out now',genre:'Adventure',rating:'8.2'},
 {id:'p5',title:'Circuit Breakers',image:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=85',platforms:['PC'],release:'Out now',genre:'Indie',rating:'8.0'},
 {id:'p6',title:'Apex Horizon',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=700&q=85',platforms:['PC','PS5'],release:'Out now',genre:'FPS',rating:'7.9'},
]

export const reviews = [
 {id:'r1',title:'Eclipse of Asteria',image:upcomingGames[1].image,score:9.2,verdict:'A breathtaking voyage through the impossible.',reviewer:'Maya Chen'},
 {id:'r2',title:'The Last Signal',image:popularGames[0].image,score:8.6,verdict:'Tension, transformed into a language.',reviewer:'Jon Bell'},
 {id:'r3',title:'Pocket Kingdoms',image:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=700&q=85',score:6.8,verdict:'A charming idea that needs a little more room.',reviewer:'Lena Ortiz'},
]
