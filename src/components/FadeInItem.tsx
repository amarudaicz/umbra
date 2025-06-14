"use client";
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type FadeInItemProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // For staggered delays using transition-delay
};

export function FadeInItem({ children, className, style }: FadeInItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current; // Capture current value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (element) {
            observer.unobserve(element);
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={ref}
      className={cn('fade-in-item', isVisible && 'is-visible', className)}
      style={style}
    >
      {children}
    </div>
  );
}
