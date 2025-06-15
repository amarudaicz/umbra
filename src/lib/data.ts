import type { Artwork } from '@/types';

const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Natura Ferox',
    slug: 'natura-ferox',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: '',
    materials: ['Hand-dyed wool', 'Silk threads', 'Cotton warp'],
    dimensions: '120cm x 80cm',
    year: 2023,
    statement: 'Es una escultura textil que habita el umbral entre lo vegetal y lo animal, lo gestante y lo salvaje. Inspirada en la Datura Ferox, planta de fruto espinoso y poder ambiguo, la obra convoca una imaginación corporal y especulativa sobre lo que se gesta en lo oculto. Parte de la serie Lo que Guarda, esta pieza trabaja con fieltro y formas orgánicas que evocan cápsulas o semillas latentes. En su silencio, sugiere una potencia contenida: una criatura por venir, un misterio que se protege con espinas',
  },
  {
    id: '2',
    title: 'Aliento de Polen',
    slug: 'aliento-de-polen',
    imageUrl: 'https://placehold.co/700x700.png',
    dataAiHint: '',
    materials: ['Recycled fabrics', 'Linen', 'Natural dyes'],
    dimensions: '90cm x 90cm',
    year: 2022,
    statement: 'Es una escultura textil que habita el umbral entre lo vegetal y lo animal, lo gestante y lo salvaje. Inspirada en la Datura Ferox, planta de fruto espinoso y poder ambiguo, la obra convoca una imaginación corporal y especulativa sobre lo que se gesta en lo oculto. Parte de la serie Lo que Guarda, esta pieza trabaja con fieltro y formas orgánicas que evocan cápsulas o semillas latentes. En su silencio, sugiere una potencia contenida: una criatura por venir, un misterio que se protege con espinas. La obra se presenta como seña y como pregunta. ¿Qué germina en silencio? ¿Qué potencia habita en lo que no alcanza aún a nombrarse? ¿Y si lo invisible no fuera ausencia, sino promesa?',
  },
  {
    id: '3',
    title: 'La Promesa de Naturalia',
    slug: 'la-promesa',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: '',
    materials: ['Raw silk', 'Metallic thread', 'Bamboo fibers'],
    dimensions: '60cm x 150cm',
    year: 2024,
    statement: 'La Promesa de Naturalia es una escultura blanda con forma ovoide, inspirada en los huevos de tiburón y en los cuerpos gestantes humanos. Su textura suave y su color orgánico evocan algo primitivo, marino y uterino a la vez. Su contorno se abre en volado, como si estuviera a punto de revelar — o proteger para siempre— aquello que guarda. La obra forma parte de la serie Lo que Guarda, y encarna la tensión entre lo contenido y lo visible. El gesto de bordar, de cerrar, de abrigar, está presente acto poético y corporal. Es una promesa que aún no se cumple, una vida posible, un secreto suspendido.',
  },
  {
    id: '4',
    title: 'Colapso',
    slug: 'colapso',
    imageUrl: 'https://placehold.co/650x750.png',
    dataAiHint: '',
    materials: ['Cotton canvas', 'Denim', 'Acrylic paint'],
    dimensions: '100cm x 100cm',
    year: 2023,
    statement: 'Un cuerpo femenino blando, agotado, yace sobre una estructura metálica hostil, sostenida apenas por la tierra. En su abdomen, un hueco: vacío, herida, señal de todo lo extraído. La obra encarna el cansancio estructural de los cuerpos feminizados, exigidos hasta el límite por sistemas que no sostienen. El contraste entre textil, metal y suelo activa una poética del derrumbe: lo que se cae, lo que ya no puede, lo que aún late. En ese desplome, Colapso no sólo denuncia, también nombra y visibiliza. Y al hacerlo, abre la posibilidad de imaginar otras formas de sostener(se).',
  },
  {
    id: '5',
    title: 'Esteparia',
    slug: 'esteparia',
    imageUrl: 'https://placehold.co/750x650.png',
    dataAiHint: 'ocean fabric',
    materials: ['Sea-sourced fibers', 'Driftwood', 'Hand-spun linen'],
    dimensions: '70cm x 110cm',
    year: 2022,
    statement: 'Esteparia es una obra cargada de elementos simbólicos que remiten a la vida originaria de la Patagonia. Naturaleza y Cultura modeladas, fusionadas, cosidas, clavadas y soportadas de una forma tan cruda y sensible como lo es dejar la sangre en la Tierra. Puntos y puntadas de sangre es la Resistencia de un pueblo Mapuche-Tehuelche que, soportando siglos de masacre continúa bordado al Territorio',
  }
];

export function getArtworks(): Artwork[] {
  return artworks;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find(artwork => artwork.slug === slug);
}
