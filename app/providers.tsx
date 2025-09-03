'use client';

import { useState } from 'react';
import ThemeContext from '@/lib/context/ThemeContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkModeEnabled, setDarkModeEnabled }}>
      <div className={isDarkModeEnabled ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { Providers };
