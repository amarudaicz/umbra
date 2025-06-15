
import { getArtworks } from '@/lib/data';
import { ArtworkCard } from '@/components/ArtworkCard';
import { SiteLayout } from '@/components/SiteLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Umbra } from '@/components/Umbra';
import profileImage from '@/assets/profile.png';
import { Title } from '@/components/Title';

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
    <div className="absolute inset-0 z-0 opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="subtlePattern" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M5 0 V10 M0 5 H10" stroke="currentColor" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#subtlePattern)" /></svg>
    </div>
  </section>
);

const AboutMeSection = () => (
  <section className="py-12 md:py-20">
    <div className="container mx-auto">

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">


        <div className="space-y-4">
          <h2 className="text-4xl font-bold mb-6">Presentacion</h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Soy artista textil y visual. Trabajo desde el
            cuerpo como territorio de memoria, cruce y
            transformación.    </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Utilizo materiales naturales,
            técnicas tradicionales como el fieltro, y
            lenguajes contemporáneos para crear
            esculturas blandas que encarnan genealogías,
            mitologías y formas de resistencia poética. Mi
            obra nace de una identidad mestiza y se
            construye desde el hacer con las manos, la
            palabra y el gesto ancestral.
          </p>
        </div>


        <div className="relative aspect-[3/4] flex justify-content-center w-full md:w-[600px] max-h-[600px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-xl">
          <Image
            src={profileImage}
            alt="Retrato de la artista Paula González"
            fill
            className="object-cover"
            data-ai-hint="artist portrait"
          />
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
    <>
      <section>


        <div className="py-12 md:py-20">
          <div className="container mx-auto">

            <div className="flex flex-column">
              <Image
                src={profileImage}
                alt="Obra La Promesa de Naturalia"
                fill
                className="object-cover"
                data-ai-hint="La Promesa de Naturalia"
              />

            </div>


          </div>
        </div>

      </section>

    </>
  );
};

export default function GalleryPage() {
  const artworks = getArtworks();

  return (
    <SiteLayout hero={<HeroSection />}>

      <div className="space-y-16 md:space-y-24">
        <AboutMeSection />

        <div>
          <Title>
            <h2>Serie: <br /> Lo Que Guarda</h2>
          </Title>

          <div className="flex">
            <div className="flex gap-1 align-items-center px-4 py-2 bg-white border border-secondary rounded-full mb-4 mt-2 ">

              <svg className='text-secondary' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.238 10.81l-.569 1.694a4.33 4.33 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.32 4.32 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.32 4.32 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.32 4.32 0 0 1-2.757-2.76l-.569-1.715a.29.29 0 0 0-.448-.126a.3.3 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.15 3.15 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.15 3.15 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.14 3.14 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.57 1.57 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.1.1 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.57 1.57 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.57 1.57 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008" />
              </svg>

              <span className="text-muted-foreground">Del Bestiario de Umbra  </span>
            </div>
          </div>


          <p className="text-lg text-balance leading-relaxed text-muted-foreground mb-14">
            lO QUE GUARDA ES UNA SERIE
            ESCULTÓRICA TEXTIL DENTRO DEL
            UNIVERSO DE EL BESTIARIO DE UMBRA
            QUE EXPLORA FORMAS GESTANTES,
            ENVOLVENTES, PROTECTORAS.

            CADA PIEZA ACTÚA COMO UN
            RECEPTÁCULO DE LO NO DICHO:
            CÁPSULAS, HUEVOS, VIENTRES Y SEMILLAS
            QUE CONTIENEN MEMORIAS, FUERZAS
            INVISIBLES O POTENCIAS POR VENIR
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


      </div>
    </SiteLayout>
  );
}
