
import { getArtworks } from '@/lib/data';
import { ArtworkCard } from '@/components/ArtworkCard';
import { SiteLayout } from '@/components/SiteLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Umbra } from '@/components/Umbra';

export const metadata: Metadata = {
  title: 'UMBRA - Colección de Arte Textil',
  description: 'Explora la colección de arte textil de UMBRA. Descubre piezas únicas que cuentan historias.',
};

const HeroSection = () => (
  <section
    className="h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden"
    aria-labelledby="artist-name"
  >
    <div className="relative z-10 p-4">
      <Umbra />
      <p className="w-full text-end sm:text-xl md:text-2xl text-primary tracking-widest mt-2 uppercase">
        Paula Gonzaléz
      </p>
    </div>
    <div className="absolute inset-0 z-0 opacity-50">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="subtlePattern" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M5 0 V10 M0 5 H10" stroke="currentColor" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#subtlePattern)" /></svg>
    </div>
  </section>
);

const AboutMeSection = () => (
  <section className="py-12 md:py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10 md:mb-16">Sobre Mí</h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none md:mx-0 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="https://placehold.co/400x533.png"
            alt="Retrato de la artista Paula González"
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            className="object-cover"
            data-ai-hint="artist portrait"
          />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Paula González es una artista textil contemporánea cuya obra explora la intersección entre técnicas tradicionales y narrativas modernas. Con una profunda conexión con los materiales naturales, Paula teje historias que invitan a la reflexión, explorando temas de memoria, identidad y la relación efímera con el entorno.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Su estudio es un santuario donde la paciencia y la precisión dan vida a texturas complejas y composiciones evocadoras. Cada pieza es un diálogo íntimo con la fibra, buscando revelar la belleza inherente en lo imperfecto y lo hecho a mano.
          </p>
           {/* Opcional: Botón para ir a la página "Acerca de" más detallada
           <Button asChild size="lg" className="mt-6 group">
            <Link href="/about">
              Conoce Más
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  </section>
);

const FeaturedArtworkSection = () => {
  const artworks = getArtworks();
  const featuredArtwork = artworks[0]; 

  if (!featuredArtwork) return null;

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10">Obra Destacada</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src={featuredArtwork.imageUrl}
              alt={featuredArtwork.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint={featuredArtwork.dataAiHint || 'textile artwork'}
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">{featuredArtwork.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {featuredArtwork.statement.substring(0, 200)}{featuredArtwork.statement.length > 200 ? '...' : ''}
            </p>
            <div className="space-y-2">
              <p><strong className="text-foreground">Materiales:</strong> {featuredArtwork.materials.join(', ')}</p>
              <p><strong className="text-foreground">Dimensiones:</strong> {featuredArtwork.dimensions}</p>
              <p><strong className="text-foreground">Año:</strong> {featuredArtwork.year}</p>
            </div>
            <Button asChild size="lg" className="mt-4 group">
              <Link href={`/artwork/${featuredArtwork.slug}`}>
                Ver Detalles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function GalleryPage() {
  const artworks = getArtworks();

  return (
    <SiteLayout hero={<HeroSection />}>
      <div className="space-y-16 md:space-y-24">
        <AboutMeSection />
        <div>
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Galería de Obras</h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Descubre una cuidada colección de piezas únicas de arte textil, cada una contando su propia historia a través de la fibra y el hilo.
          </p>
          {artworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {artworks.map((artwork, index) => (
                <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No hay obras para mostrar en este momento. Por favor, vuelve más tarde.</p>
          )}
        </div>
        <FeaturedArtworkSection />
      </div>
    </SiteLayout>
  );
}
