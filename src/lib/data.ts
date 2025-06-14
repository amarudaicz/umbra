import type { Artwork } from '@/types';

const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Woven Dreams',
    slug: 'woven-dreams',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'abstract tapestry',
    materials: ['Hand-dyed wool', 'Silk threads', 'Cotton warp'],
    dimensions: '120cm x 80cm',
    year: 2023,
    statement: 'A piece exploring the fluidity of dreams and the subconscious mind through intricate weaving patterns and textures.',
  },
  {
    id: '2',
    title: 'Earthly Echoes',
    slug: 'earthly-echoes',
    imageUrl: 'https://placehold.co/700x700.png',
    dataAiHint: 'nature embroidery',
    materials: ['Recycled fabrics', 'Linen', 'Natural dyes'],
    dimensions: '90cm x 90cm',
    year: 2022,
    statement: 'Inspired by the patterns and colors of the natural world, this piece uses sustainable materials to reflect on environmental themes.',
  },
  {
    id: '3',
    title: 'Silent Symphony',
    slug: 'silent-symphony',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'minimalist textile',
    materials: ['Raw silk', 'Metallic thread', 'Bamboo fibers'],
    dimensions: '60cm x 150cm',
    year: 2024,
    statement: 'A minimalist exploration of texture and light, creating a visual rhythm that speaks in hushed tones.',
  },
  {
    id: '4',
    title: 'Urban Threads',
    slug: 'urban-threads',
    imageUrl: 'https://placehold.co/650x750.png',
    dataAiHint: 'geometric quilt',
    materials: ['Cotton canvas', 'Denim', 'Acrylic paint'],
    dimensions: '100cm x 100cm',
    year: 2023,
    statement: 'Reflecting the organised chaos of city life, this piece combines bold geometric shapes with subtle textural details.',
  },
  {
    id: '5',
    title: 'Coastal Whispers',
    slug: 'coastal-whispers',
    imageUrl: 'https://placehold.co/750x650.png',
    dataAiHint: 'ocean fabric',
    materials: ['Sea-sourced fibers', 'Driftwood', 'Hand-spun linen'],
    dimensions: '70cm x 110cm',
    year: 2022,
    statement: 'Captures the serene and ever-changing moods of the coastline through organic forms and a palette drawn from the sea and sand.',
  },
  {
    id: '6',
    title: 'Crimson Bloom',
    slug: 'crimson-bloom',
    imageUrl: 'https://placehold.co/600x900.png',
    dataAiHint: 'floral textile',
    materials: ['Velvet', 'Embroidery silk', 'Beads'],
    dimensions: '50cm x 70cm',
    year: 2024,
    statement: 'A vibrant depiction of a flower in full bloom, emphasizing rich color and tactile sensation.',
  },
];

export function getArtworks(): Artwork[] {
  return artworks;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find(artwork => artwork.slug === slug);
}
