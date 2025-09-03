import type { Metadata } from 'next';
import { Providers } from './providers';
import NavBar from './_components/nav/navbar';
import Footer from './_components/ui/footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Diego Cisneros | Software Developer',
  description: 'Personal website and portfolio of Diego Cisneros, a software developer.',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
