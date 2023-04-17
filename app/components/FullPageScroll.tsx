'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { useRef, useEffect, ReactNode } from 'react';

export default function FullPageScroll({ children }: { children: ReactNode[] }) {
  const windowSize = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentSection = 0;
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const delta = Math.max(-1, Math.min(1, event.deltaY));
      const newSection = currentSection + delta;
      if (newSection < 0 || newSection >= children.length) return;

      const newSectionTop = newSection * windowSize.height;
      container.scrollTo({ top: newSectionTop, behavior: 'smooth' });
      currentSection = newSection;
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [children, windowSize]);

  const containerStyles: React.CSSProperties = {
    height: `${windowSize.height}px`,
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll' as React.CSSProperties['overflowY'],
  };

  return (
    <div
      className="no-scrollbar relative w-screen overflow-x-hidden"
      ref={containerRef}
      style={containerStyles}>
      {children.map((child, i) => (
        <div key={i} className="flex justify-center items-center h-screen">
          {child}
        </div>
      ))}
    </div>
  );
}
