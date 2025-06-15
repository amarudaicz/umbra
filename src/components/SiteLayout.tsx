import type React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

type SiteLayoutProps = {
  children: React.ReactNode;
  hero?: React.ReactNode;
};

export function SiteLayout({ children, hero }: SiteLayoutProps) {
  return (
    <>
      <Navbar />
      {hero && <div className="w-full">{hero}</div>}
      <main className="flex-grow py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
