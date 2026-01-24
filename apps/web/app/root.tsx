import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '@/styles/global.css';
import { lightTheme } from '@/styles/theme.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { mainContent } from './root.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Beepa's - Made Local. Made Right. | Wisconsin Jarred & Canned Goods</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍯</text></svg>"
        />
        {/* Google Fonts - TWO FONTS: Alfa Slab One (h1) + Montserrat (everything else) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className={lightTheme}>
        <Header />
        <main className={mainContent}>{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
