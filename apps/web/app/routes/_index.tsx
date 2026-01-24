import { vars } from '@/styles/theme.css';
import { container, section } from '@/styles/utils.css';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router';
import {
  hero,
  heroTitle,
  heroSubtitle,
  ctaButtons,
  storyGrid,
  beepaImage,
  awardsContainer,
  awardBadge,
  sectionLabel,
  sectionTitle,
  contentParagraph,
  centeredContent,
  contentBold,
  principlesList,
  principleItem,
  principleBullet,
  tagline,
  contentContainer,
} from './_index.css';
import { homeContent } from '@/content/home';

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className={hero}>
        <div className={container}>
          <h1 className={heroTitle}>{homeContent.hero.title}</h1>
          <p className={heroSubtitle}>{homeContent.hero.subtitle}</p>
          <div className={ctaButtons}>
            <Link to={homeContent.hero.cta.primary.link}>
              <Button variant="primary" size="lg">
                {homeContent.hero.cta.primary.text}
              </Button>
            </Link>
            <Link to={homeContent.hero.cta.secondary.link}>
              <Button variant="outline" size="lg">
                {homeContent.hero.cta.secondary.text}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className={section}>
        <div className={container}>
          <h3 className={sectionLabel}>{homeContent.story.title}</h3>
          <h2 className={sectionTitle}>{homeContent.story.subtitle}</h2>
          <div className={storyGrid}>
            <img src="/images/beepa.jpg" alt="Beepa (Walter Hopper)" className={beepaImage} />
            <p className={contentParagraph}>{homeContent.story.content}</p>
          </div>
        </div>
      </section>

      {/* How It Started Section */}
      <section className={section} style={{ backgroundColor: vars.color.background.secondary }}>
        <div className={container}>
          <h3 className={sectionLabel}>{homeContent.started.title}</h3>
          <h2 className={sectionTitle}>{homeContent.started.subtitle}</h2>
          <p className={contentParagraph}>{homeContent.started.content}</p>
        </div>
      </section>

      {/* What We Make Section */}
      <section className={section}>
        <div className={container}>
          <h3 className={sectionLabel}>{homeContent.whatWeMake.title}</h3>
          <h2 className={sectionTitle}>{homeContent.whatWeMake.subtitle}</h2>
          <p className={contentParagraph} style={{ marginBottom: vars.space.xl }}>
            {homeContent.whatWeMake.content}
          </p>
          <div className={contentContainer}>
            <p className={contentBold}>Every batch is made with the same mindset:</p>
            <ul className={principlesList}>
              {homeContent.whatWeMake.principles.map((principle, index) => (
                <li key={index} className={principleItem}>
                  <span className={principleBullet}>•</span>
                  {principle}
                </li>
              ))}
            </ul>
            <p className={tagline}>{homeContent.whatWeMake.tagline}</p>
          </div>
          <div className={awardsContainer}>
            <img
              src="/logo/wisconsin-state-fair-award-winner.jpg"
              alt="Wisconsin State Fair Award Winner"
              className={awardBadge}
            />
            <img
              src="/logo/wisconsins-best-stamp.jpg"
              alt="Wisconsin's Best"
              className={awardBadge}
            />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={section} style={{ backgroundColor: vars.color.background.secondary }}>
        <div className={container}>
          <h2 className={sectionTitle}>{homeContent.closing.title}</h2>
          <p className={`${contentParagraph} ${centeredContent}`}>{homeContent.closing.content}</p>
        </div>
      </section>
    </div>
  );
}
