import { getArtworks } from '@/lib/data';
import { ArtworkCard } from '@/components/ArtworkCard';
import { SiteLayout } from '@/components/SiteLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artwork Gallery - Threadfolio by UMBRA',
  description: 'Explora la colección de arte textil de UMBRA. Descubre piezas únicas que cuentan historias a través de fibras e hilos.',
};

const HeroSection = () => (
  <section 
    className="h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden"
    aria-labelledby="artist-name"
  >
    <div className="relative z-10 p-4">
      <h1 
        id="artist-name"
        className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-headline font-bold text-primary tracking-tighter leading-none"
      >
        UMBRA
      </h1>
      <p className="w-full text-end sm:text-xl md:text-2xl font-headline text-primary/70 tracking-wider mt-2">
        ARTISTA
      </p>
    </div>
    <div className="absolute inset-0 z-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="subtlePattern" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M5 0 V10 M0 5 H10" stroke="currentColor" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#subtlePattern)" /></svg>
    </div>
  </section>
);

const FeaturedArtworkSection = () => {
  const artworks = getArtworks();
  const featuredArtwork = artworks[0]; // Using the first artwork as featured

  if (!featuredArtwork) return null;

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center text-primary mb-10">Obra Destacada</h2>
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
            <h3 className="text-2xl lg:text-3xl font-headline font-semibold text-foreground">{featuredArtwork.title}</h3>
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
      <div className="space-y-8">
        <h2 className="text-4xl font-headline font-bold text-center text-primary">Artwork Gallery</h2>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Discover a curated collection of unique textile art pieces, each telling its own story through fiber and thread.
        </p>
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {artworks.map((artwork, index) => (
              <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No artworks to display at the moment. Please check back later.</p>
        )}
      </div>
      <FeaturedArtworkSection />
    </SiteLayout>
  );
}
