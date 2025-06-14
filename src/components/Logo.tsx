import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-headline font-semibold text-primary hover:text-primary/80 transition-colors" aria-label="Threadfolio Home">
      Threadfolio
    </Link>
  );
}
