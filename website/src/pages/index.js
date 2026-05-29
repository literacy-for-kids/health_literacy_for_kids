import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/hero-image.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open curriculum for ages 8–12</p>
          <h1 className="hero__title">Health Systems Literacy for Kids</h1>
          <p className="hero__subtitle">
            A kid-friendly systems curriculum that helps ages 8–12 notice body clues, understand what connected body systems are doing, and ask safer, kinder questions about health.
          </p>
          <p className={styles.heroLead}>
            18 weeks of hands-on lessons — about 20 minutes per session — for classrooms,
            homeschool families, after-school clubs, and curious adults. Kids can draw,
            roleplay, use emoji scales, or answer out loud while they study body autopilot,
            food jobs, the body security team, night cleanup and repair, and a curiosity-driven
            Body Mystery Project.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/literacy-for-kids/health_literacy_for_kids">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="Illustrated hero image for the health systems literacy curriculum"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A free, open 18-week curriculum that helps ages 8–12 notice body clues, understand connected body systems, and ask safer, kinder questions about health.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
