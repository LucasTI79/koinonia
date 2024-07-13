"use client"
import { useCallback, useEffect, useState } from "react";

export const useScreenDetector = () => {
  const secureWindow = typeof window !== "undefined" ? window : null; 

  const [width, setWidth] = useState(secureWindow?.innerWidth ?? 0);

  const handleWindowSizeChange = useCallback(() => {
    if(secureWindow?.innerWidth) setWidth(secureWindow?.innerWidth);
  }, [secureWindow]);

  useEffect(() => {
    secureWindow?.addEventListener("resize", handleWindowSizeChange);

    return () => {
        secureWindow?.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange, secureWindow]);

  const isMobile = width <= 768;
  const isTablet = width <= 1024;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
};