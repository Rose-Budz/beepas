import { vars } from '@/styles/theme.css';
import { container, section } from '@/styles/utils.css';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router';
import { hero, heroTitle, heroSubtitle, heroDescription, ctaButtons } from './_index.css';

export default function Index() {
  return (
    <div>
      <section className={hero}>
        <div className={container}>
          <h1 className={heroTitle}>Beepa's Country Goods</h1>
          <p className={heroSubtitle}>Handmade Artisan Sauces & Preserves</p>
          <p className={heroDescription}>
            Experience the authentic taste of country-style cooking with our handcrafted sauces and
            preserved goods.
          </p>
          <div className={ctaButtons}>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Shop Products
              </Button>
            </Link>
            <Link to="/gallery/images">
              <Button variant="outline" size="lg">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <h2 style={{ textAlign: 'center', marginBottom: vars.space.xl }}>About Beepa</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
            For over 20 years, Beepa has been crafting authentic country-style sauces and preserves
            using traditional recipes passed down through generations. Every jar is made with love,
            using only the finest locally-sourced ingredients. What started in a small country
            kitchen has grown into a beloved local brand, but we've never lost sight of what
            matters most: quality, authenticity, and that homemade taste you can't find anywhere
            else.
          </p>
        </div>
      </section>
    </div>
  );
}
