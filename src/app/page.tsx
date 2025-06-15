import { getArtworks } from "@/lib/data";
import { ArtworkCard } from "@/components/ArtworkCard";
import { SiteLayout } from "@/components/SiteLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Umbra } from "@/components/Umbra";
import { Title } from "@/components/Title";

export const metadata: Metadata = {
  title: "UMBRA - Colección de Arte Textil",
  description:
    "Explora la colección de arte textil de UMBRA. Descubre piezas únicas que cuentan historias.",
};

const HeroSection = () => (
  <section
    className="h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden"
    aria-labelledby="artist-name"
  >
    <div className="relative z-10 p-4">
        <div className="hidden md:block">
          <Umbra />
        </div>

        <div className="md:hidden">
          <Title className="text-[5rem]">
            UMBRA
          </Title>
        </div>
  
      <p className="w-full text-end sm:text-xl md:text-2xl text-primary tracking-widest mt-2 uppercase">
        Paula Gonzaléz
      </p>
    </div>

    <div className="absolute inset-0 z-0">
      {/* SVG con patrón */}
      <svg
        className="w-full h-full text-primary opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="subtlePattern"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M5 0 V10 M0 5 H10"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#subtlePattern)" />
      </svg>

      {/* Gradiente circular */}
      <div className="absolute inset-0 bg-[radial-gradient(_#ffffff00,_#fff_90%)] pointer-events-none" />
    </div>
  </section>
);

const AboutMeSection = () => (
  <section className="py-12 md:py-20" id="sobre-mi">
    <div className="container px-4 mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold mb-6">Presentación</h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Soy artista textil y visual. Trabajo desde el cuerpo como territorio
            de memoria, cruce y transformación.{" "}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Utilizo materiales naturales, técnicas tradicionales como el
            fieltro, y lenguajes contemporáneos para crear esculturas blandas
            que encarnan genealogías, mitologías y formas de resistencia
            poética. Mi obra nace de una identidad mestiza y se construye desde
            el hacer con las manos, la palabra y el gesto ancestral.
          </p>
        </div>

        <div className="relative aspect-[3/4] flex justify-content-center w-full md:max-w-[600px] max-h-[600px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-xl">
          <Image
            src={"/assets/profile.png"}
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

const PoeticSection = () => {
  return (
    <>
      <section id="poetica" className="relative overflow-hidden md:overflow-visible">
        <div className="w-[350px] h-[350px] rounded-full bg-orange-200 blur-[100px] absolute top-10 left-0 "></div>
        <div className="w-[350px] h-[350px] rounded-full bg-orange-200  blur-[100px] absolute top-10 right-0 "></div>

        <div className="py-12 md:py-20">
          <div className="container mx-auto">
            <div className="flex flex-col text-center align-center justify-center">
              {/* <Title>
                <h2 className="mb-6">Poetica</h2>
              </Title> */}

              <div className="flex justify-center relative">
                <div className="text-center">
                  <Title>
                    <p className="md:text-[4rem] mb-4">
                      "Desde mi mestizaje, nacen"
                    </p>
                  </Title>

                  <Title>
                    <p className="md:text-[4rem] mb-4 text-balance">
                      Soy hija de lo que no fue pensado junto.
                    </p>

                    <p className="md:text-[4rem] mb-4 text-balance">
                      De los conquistadores y de los cuerpos arrasados.
                    </p>

                    <div className="md:text-[4rem] mb-4 text-balance">
                      De la lengua que impuso nombre y del silencio que
                      resistió.
                    </div>
                  </Title>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const LastProyect = () => {
  return (
    <>
      <section id="ngel" className="relative bg-gray-50 overflow-hidden">
        <div className="py-12 md:py-20">
          <div className="px-4 container mx-auto">
            <div className="flex flex-col">
              <Title className="text-center ">
                <h2>NGEL WAIKUL</h2>
              </Title>

              <div className="flex justify-center mb-20">
                <div className="flex gap-1 align-items-center px-4 py-2 bg-white border border-yellow-600 rounded-full mb-4 mt-2 ">
                  <svg
                    className="text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m15.238 10.81l-.569 1.694a4.33 4.33 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.32 4.32 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.32 4.32 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.32 4.32 0 0 1-2.757-2.76l-.569-1.715a.29.29 0 0 0-.448-.126a.3.3 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.15 3.15 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.15 3.15 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.14 3.14 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.57 1.57 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.1.1 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.57 1.57 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.57 1.57 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008"
                    />
                  </svg>

                  <span className="text-yellow-600 text-muted-foreground">
                    Obra de 2025
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-24">
                <div className="flex-1">
                  <p className=" text-muted-foreground leading-relaxed text-xl">
                    Escultura textil mural, fieltro húmedo, lana virgen
                    Patagónica teñida, costura y fibras naturales, Diámetro
                    100cm.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-xl">
                    Ngel Waikul significa “espíritu del monte” en mapuzungun. Es
                    una criatura textil que habita la frontera entre el cuerpo y
                    el territorio. Su forma circular remite al ciclo, al ojo y
                    al paisaje: puede ser rostro, nido o monte visto desde
                    arriba. Las texturas están construidas con lana virgen
                    patagónica teñida manualmente en verdes, ocres, blancos y
                    grises, evocando follaje, suelo, niebla y hueso.
                  </p>
                </div>

                <div className="flex-1 relative">
                  <div className="w-full absolute -top-4 h-[1px] bg-gray-700">
                    <div className="absolute left-0 w-[1px] h-[20px] top-1/2 -translate-y-1/2 bg-gray-700"></div>
                    <div className="absolute right-0 w-[1px] h-[20px] top-1/2 -translate-y-1/2 bg-gray-700"></div>
                    <span className="text-muted-foreground leading-relaxed text-xl absolute -top-8 left-1/2 -translate-x-1/2">
                      100cm
                    </span>
                  </div>

                  {/* <div className="w-[1px] h-full absolute -left-4  bg-gray-700">
                    <div className="absolute top-0 w-[20px] h-[1px] left-1/2 -translate-x-1/2 bg-gray-700"></div>
                    <div className="absolute bottom-0 w-[20px] h-[1px] left-1/2 -translate-x-1/2 bg-gray-700"></div>
                    <span></span>

                  </div> */}

                  <Image
                    className="animate-spin"
                    width={700}
                    height={700}
                    src={"/assets/ngel.png"}
                    alt="Obra NGEL WAIKUL"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed text-xl">
                    En el centro, una figura pálida y orgánica —entre fruto,
                    piedra o cráneo— brota como núcleo de fuerza o conciencia.
                    Una forma oscura en la parte superior se despliega como
                    ramas, cejas o alas, marcando el gesto sagrado de lo que
                    protege.
                  </p>

                  <p className="text-muted-foreground leading-relaxed text-xl">
                    Ngel Waikul no representa al monte: es su espíritu hecho
                    cuerpo textil, su memoria vegetal y animal, su respiración
                    invisible. Es un umbral sensible donde se cruzan lo natural
                    y lo mítico, lo telúrico y lo simbólico
                  </p>
                </div>
              </div>
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
      <div className="space-y-16 md:space-y-24 ">
        <AboutMeSection />

        <section id="serie" className="relative container mx-auto px-4">
          <Image
            width={220}
            height={220}
            src={"/assets/rollo-amarillo.png"}
            className="absolute hidden md:block -top-14 right-80  z-[-10]"
            alt="rollos"
          />
          <Image
            width={220}
            height={220}
            src={"/assets/rollo-rojo.png"}
            className="absolute hidden md:block top-0 right-10 rotate-45 z-[-10]"
            alt="rollos"
          />

          <Title>
            <h2>
              Serie: <br /> Lo Que Guarda
            </h2>
          </Title>

          <div className="flex">
            <div className="flex gap-1 align-items-center px-4 py-2 bg-white border border-yellow-600 rounded-full mb-4 mt-2 ">
              <svg
                className="text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m15.238 10.81l-.569 1.694a4.33 4.33 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.32 4.32 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.32 4.32 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.32 4.32 0 0 1-2.757-2.76l-.569-1.715a.29.29 0 0 0-.448-.126a.3.3 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.15 3.15 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.15 3.15 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.14 3.14 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.57 1.57 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.1.1 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.57 1.57 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.57 1.57 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008"
                />
              </svg>

              <span className="text-yellow-600 text-muted-foreground">
                Del Bestiario de Umbra
              </span>
            </div>
          </div>

          <p className="text-lg text-balance leading-relaxed text-muted-foreground mb-14 uppercase">
            LO QUE GUARDA ES UNA SERIE ESCULTÓRICA TEXTIL DENTRO DEL UNIVERSO DE
            EL BESTIARIO DE UMBRA QUE EXPLORA FORMAS GESTANTES, ENVOLVENTES,
            PROTECTORAS. CADA PIEZA ACTÚA COMO UN RECEPTÁCULO DE LO NO DICHO:
            CÁPSULAS, HUEVOS, VIENTRES Y SEMILLAS QUE CONTIENEN MEMORIAS,
            FUERZAS INVISIBLES O POTENCIAS POR VENIR
          </p>

          {artworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {artworks.map((artwork, index) => (
                <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No hay obras para mostrar en este momento. Por favor, vuelve más
              tarde.
            </p>
          )}
        </section>

        <PoeticSection></PoeticSection>
        <LastProyect></LastProyect>
      </div>
    </SiteLayout>
  );
}
