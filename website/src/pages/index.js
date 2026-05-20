import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Health Systems Literacy for Kids</h1>
          <p className="hero__subtitle">
            A free, open curriculum that teaches ages 8–12 how the human body operates as an integrated system of feedback loops.
          </p>
          <p className={styles.heroLead}>
            18 weeks of hands-on, measurement-driven lessons — each about 20 minutes
            per session — designed for classrooms, homeschool families, after-school
            clubs, and any adult who wants to help kids move from following health rules
            to actively managing their own biological systems.
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
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A free, open 18-week curriculum that teaches ages 8–12 how the human body operates as an integrated system of feedback loops.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
