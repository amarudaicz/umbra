
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Obras' },
  { href: '/about', label: 'Proyecto Destacado' },
  { href: '/about', label: 'Poética' },
  { href: '/about', label: 'Curriculum' },
  { href: '/contact', label: 'Contacto' },
  { href: '/contact', label: 'Proxima Serie' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show navbar if scrolling up or if near the top of the page (within 10px)
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    // window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [prevScrollPos]);

  return ( 
    <header 
      className={cn(
        "fixed -translate-x-1/2 left-1/2 z-50 w-fit border border-gray-300 bg-white/20 rounded-full backdrop-blur transition-transform duration-300 ease-in-out",
        visible ? "top-3 translate-y-0" : "top-3 -translate-y-[calc(100%_+_0.75rem)]" // 0.75rem is for top-3 (12px)
      )}
    >
      <div className="container mx-auto flex gap-10 h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-nowrap font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
                pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col space-y-4 p-6">
                <div className="mb-4">
                 <Logo />
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block text-base font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
                      pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
