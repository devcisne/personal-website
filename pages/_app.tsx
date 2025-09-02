import { useState } from 'react';
import ThemeContext from '@/lib/context/ThemeContext';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/components/NavBar/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkModeEnabled, setDarkModeEnabled }}>
      <div className={isDarkModeEnabled ? 'dark' : ''}>
        <Script src="/tagcanvas.min.js" strategy="beforeInteractive" />
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default MyApp;
