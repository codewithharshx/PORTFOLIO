'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface IntroAnimationContextType {
  isIntroComplete: boolean;
  completeIntro: () => void;
}

const IntroAnimationContext = createContext<IntroAnimationContextType>({
  isIntroComplete: true,
  completeIntro: () => {},
});

export function IntroAnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Initialize state: on homepage, start with false immediately on frame 0 to prevent Hero flash
  const [isIntroComplete, setIsIntroComplete] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname !== '/';
    }
    return !isHomePage;
  });

  // Keep isIntroComplete in sync with route navigation
  useEffect(() => {
    if (isHomePage) {
      setIsIntroComplete(false);
    } else {
      setIsIntroComplete(true);
    }
  }, [isHomePage]);

  const completeIntro = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  // If navigating away from home, ensure intro is complete
  useEffect(() => {
    if (!isHomePage) {
      setIsIntroComplete(true);
    }
  }, [isHomePage]);

  return (
    <IntroAnimationContext.Provider value={{ isIntroComplete, completeIntro }}>
      {children}
    </IntroAnimationContext.Provider>
  );
}

export function useIntroAnimation() {
  return useContext(IntroAnimationContext);
}

