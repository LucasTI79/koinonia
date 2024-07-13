"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { cn } from '@/lib/utils';

export function Cursor() {
  const { isDesktop } = useScreenDetector();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className={cn(
        `pointer-events-none fixed h-32 w-32 rounded-full z-50`,
        `bg-black/60 dark:bg-white/40 blur-[100px]`,
      )}
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
      }}
      animate={{
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};
