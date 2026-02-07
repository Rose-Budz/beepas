import { Button } from '@/components/ui/Button';
import { Link } from 'react-router';
import clsx from 'clsx';
import {
  hero,
  heroCard,
  heroTitle,
  heroSubtitle,
  ctaButtons,
  contentSection,
  contentCard,
  storyGrid,
  beepaImage,
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
  awardsLayout,
  awardsImageCol,
  awardsListCol,
  awardsList,
  awardsSection,
  awardsContainer,
} from './_index.css';
import { homeContent } from '@/content/home';

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className={hero}>
        <div className={heroCard}>
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
      <section className={contentSection}>
        <div className={contentCard}>
          <h3 className={sectionLabel}>{homeContent.story.title}</h3>
          <h2 className={sectionTitle}>{homeContent.story.subtitle}</h2>
          <div className={storyGrid}>
            <img src="/images/beepa.jpg" alt="Beepa (Walter Hopper)" className={beepaImage} />
            <div>
              <p className={contentParagraph}>{homeContent.story.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Started Section */}
      <section className={contentSection}>
        <div className={contentCard}>
          <h3 className={sectionLabel}>{homeContent.started.title}</h3>
          <h2 className={sectionTitle}>{homeContent.started.subtitle}</h2>
          {homeContent.started.content.split('\n\n').map((block, idx) => (
            <p key={idx} className={contentParagraph}>
              {block}
            </p>
          ))}

          {homeContent.started.awards && homeContent.started.awards.length > 0 && (
            <div className={awardsSection}>
              <h4 className={sectionLabel}>{homeContent.started.awardsTitle}</h4>
              <div className={awardsLayout}>
                <div className={awardsImageCol}>
                  <img
                    src="/logo/wisconsin-state-fair-award-winner.jpg"
                    alt="Awarded at the 2019 Wisconsin State Fair"
                    className={awardBadge}
                  />
                </div>
                <div className={awardsListCol}>
                  <ul className={clsx(principlesList, awardsList)}>
                    {homeContent.started.awards.map((award, index) => (
                      <li key={index} className={principleItem}>
                        <span className={principleBullet}>🏆</span>
                        {award}
                      </li>
                    ))}
                  </ul>
                  {homeContent.started.awardsLink && (
                    <p className={contentParagraph}>
                      <a
                        href={homeContent.started.awardsLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {homeContent.started.awardsLink.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What We Make Section */}
      <section className={contentSection}>
        <div className={contentCard}>
          <h3 className={sectionLabel}>{homeContent.whatWeMake.title}</h3>
          <h2 className={sectionTitle}>{homeContent.whatWeMake.subtitle}</h2>
          <p className={contentParagraph}>{homeContent.whatWeMake.content}</p>
          <div>
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
              src="/logo/wisconsins-best-stamp.jpg"
              alt="Wisconsin's Best"
              className={awardBadge}
            />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={contentSection}>
        <div className={contentCard}>
          <h2 className={sectionTitle}>{homeContent.closing.title}</h2>
          <p className={clsx(contentParagraph, centeredContent)}>{homeContent.closing.content}</p>
        </div>
      </section>
    </div>
  );
}
