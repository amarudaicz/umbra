import { getArtworkBySlug, getArtworks } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SiteLayout } from '@/components/SiteLayout';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ArtworkPageProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: ArtworkPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    return {
      title: 'Artwork Not Found - Threadfolio',
    }
  }

  return {
    title: `${artwork.title} - Threadfolio`,
    description: artwork.statement.substring(0, 150) + '...',
    openGraph: {
      images: [artwork.imageUrl],
    },
  }
}

export async function generateStaticParams() {
  const artworks = getArtworks();
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  return (
    <SiteLayout>
      <div className="max-w-4xl py-20 mx-auto">
        <Button variant="outline" asChild className="mb-6 group">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Volver
          </Link>
        </Button>
        <article className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-md">
              <Image
                src={`/assets/${artwork.imageUrl}`}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                data-ai-hint={artwork.dataAiHint || 'textile detail'}
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{artwork.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{artwork.year}</p>
              
              <Separator className="my-6" />

              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">Materiales</h2>
                  <div className="flex flex-wrap gap-2">
                    {artwork.materials.map((material, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">{material}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1 text-foreground">Dimensiones</h2>
                  <p className="text-muted-foreground">{artwork.dimensions}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Descripcion</h2>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{artwork.statement}</p>
          </div>
        </article>
      </div>
    </SiteLayout>
  );
}
