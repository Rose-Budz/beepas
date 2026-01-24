import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '@/styles/global.css';
import { lightTheme } from '@/styles/theme.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { mainContent } from './root.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Beepa's Country Goods - Handmade Artisan Sauces & Preserves</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍯</text></svg>" />
        <Meta />
        <Links />
      </head>
      <body className={lightTheme}>
        <Header />
        <main className={mainContent}>
          {children}
        </main>
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
