import Link from 'next/link';
import Image from 'next/image';
import type { Artwork } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeInItem } from '@/components/FadeInItem';

type ArtworkCardProps = {
  artwork: Artwork;
  index: number;
};

export function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  return (
    <FadeInItem style={{ transitionDelay: `${index * 100}ms` }}>
      <Link href={`/artwork/${artwork.slug}`} className="group block">
        <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 h-full flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-[3/4] relative w-full overflow-hidden">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={artwork.dataAiHint || 'textile art'}
                priority={index < 3} // Prioritize loading for the first few images
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            <CardTitle className="text-lg font-headline group-hover:text-primary transition-colors">{artwork.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{artwork.year}</p>
          </CardContent>
        </Card>
      </Link>
    </FadeInItem>
  );
}
