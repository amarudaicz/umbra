import { getArtworks } from '@/lib/data';
import { ArtworkCard } from '@/components/ArtworkCard';
import { SiteLayout } from '@/components/SiteLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artwork Gallery - Threadfolio by UMBRA',
  description: 'Explora la colección de arte textil de UMBRA. Descubre piezas únicas que cuentan historias a través de fibras e hilos.',
};

const HeroSection = () => (
  <section 
    className="h-[80vh] flex flex-col items-center justify-center text-center bg-background relative overflow-hidden"
    aria-labelledby="artist-name"
  >
    <div className="relative z-10 p-4">
      <h1 
        id="artist-name"
        className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-headline font-bold text-primary tracking-tighter leading-none"
      >
        UMBRA
      </h1>
    </div>
    {/* Fondo sutil opcional para la estética blanco y negro */}
    {/* <div className="absolute inset-0 z-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="subtlePattern" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M5 0 V10 M0 5 H10" stroke="currentColor" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#subtlePattern)" /></svg>
    </div> */}
  </section>
);

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
    </SiteLayout>
  );
}
