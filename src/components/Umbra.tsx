import type React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function Umbra({ className }: { className?: string }) {
  
  return (
    <>
      <h1
        className={`font-bold text-primary leading-none text-[10rem] sm:text-[12rem] md:text-[14rem] ${className}`}
      >
        <span className="inline-block -mr-[1.5rem]">U</span>
        <span className="inline-block -mr-[2rem] -translate-y-6">M</span>
        <span className="inline-block -mr-[2rem]">B</span>
        <span className="inline-block -mr-[2rem] -translate-y-6">R</span>
        <span className="inline-block">A</span>
      </h1>
   
    </>
  );
}
