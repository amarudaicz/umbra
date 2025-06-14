import { getArtworks } from '@/lib/data';
import { ArtworkCard } from '@/components/ArtworkCard';
import { SiteLayout } from '@/components/SiteLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artwork Gallery - Threadfolio',
  description: 'Explore the collection of textile artworks by Threadfolio.',
};

export default function GalleryPage() {
  const artworks = getArtworks();

  return (
    <SiteLayout>
      <div className="space-y-8">
        <h1 className="text-4xl font-headline font-bold text-center text-primary">Artwork Gallery</h1>
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
