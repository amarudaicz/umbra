import { SiteLayout } from '@/components/SiteLayout';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Threadfolio',
  description: 'Learn more about the artist behind Threadfolio and their passion for textile art.',
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-headline font-bold text-center text-primary">About the Artist</h1>
        
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-md shrink-0">
              <Image 
                src="https://placehold.co/400x400.png" 
                alt="Artist Portrait" 
                fill
                sizes="(max-width: 768px) 192px, 240px"
                className="object-cover"
                data-ai-hint="artist portrait"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">Jane Threadweaver</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Jane Threadweaver is a contemporary textile artist whose work explores the intricate beauty of natural fibers and traditional weaving techniques. With a deep passion for storytelling through texture and color, Jane creates pieces that evoke emotion and invite contemplation.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Her journey into textile art began over a decade ago, inspired by a rich family heritage of craftsmanship and a desire to connect with the tactile world in an increasingly digital age. Jane's studio is a sanctuary where threads of silk, wool, and linen are transformed into captivating narratives.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-3">Artistic Philosophy</h3>
            <p className="text-foreground/80 leading-relaxed">
              "I believe that textiles are more than just materials; they are vessels of memory, culture, and personal expression. Each thread carries a story, and the process of weaving is a meditative dialogue between myself and the medium. My aim is to create art that not only adorns a space but also enriches the soul, encouraging viewers to pause and appreciate the delicate artistry woven into every piece."
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
