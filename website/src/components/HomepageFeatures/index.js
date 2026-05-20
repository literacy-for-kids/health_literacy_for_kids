import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {hub, curricula} from 'literacy-site-theme/ecosystem';
import styles from './styles.module.css';

const features = [
  {
    title: 'Homeostasis is a Control Loop',
    description:
      'Students learn that sweating, shivering, and hunger are system alerts — triggered when variables drift outside acceptable tolerances.',
  },
  {
    title: 'Fuel vs. Filler',
    description:
      'Diet reframed as a chemical engineering problem: calories are thermal energy, macronutrients are structural materials and lubricants.',
  },
  {
    title: 'Sleep is System Defragmentation',
    description:
      'Sleep is a biologically active maintenance cycle — when the body clears metabolic waste, consolidates memory, and repairs hardware.',
  },
  {
    title: 'The Immune System as Cybersecurity',
    description:
      'The body detects foreign hardware, neutralizes threats, and writes new antibodies — just like a firewall and antivirus.',
  },
  {
    title: 'The Microbiome as a Co-Processor',
    description:
      'Trillions of gut microbes act as a third-party processing plant. Students learn to feed the system that feeds them.',
  },
];

const roadmapSections = [
  {
    title: 'The Control Loops',
    weeks: 'Weeks 1–3',
    description: 'Baseline telemetry and homeostasis',
  },
  {
    title: 'The Chemical Plant',
    weeks: 'Weeks 4–7',
    description: 'Fuel processing, energy spikes, and structural nutrients',
  },
  {
    title: 'System Security & Threat Response',
    weeks: 'Weeks 8–10',
    description: 'Virology, immunology, and the physical hull',
  },
  {
    title: 'Preventative Maintenance',
    weeks: 'Weeks 11–14',
    description: 'Circadian rhythms, sleep architecture, and wear',
  },
  {
    title: 'The Optimization Protocol',
    weeks: 'Weeks 15–18',
    description: 'Design, test, and iterate a personal health system',
  },
];

const currentSiteHref = 'https://literacy-for-kids.github.io/health_literacy_for_kids/';

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function LiteracyCard({label, href, description, isCurrent}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">
        <Link href={href} className={styles.literacyLink}>
          {label}
        </Link>
        {isCurrent && <span className={styles.currentBadge}>Current curriculum</span>}
      </Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Health Systems Literacy for Kids is an 18-week curriculum for ages 8–12, built for
            classroom teachers, homeschool families, caregivers, and after-school leaders.
            Students move from blindly following health rules to actively managing their
            physiological operating system — understanding how the body runs, what breaks it,
            and how to maintain it intentionally.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Ecosystem</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of{' '}
            <Link href={hub.href}>{hub.label}</Link>
            , a collection of open-source curricula designed to help children
            ages 8–12 understand the systems that shape the modern world.
          </p>
          <div className={styles.callout}>
            <Heading as="h3">Explore the other literacies</Heading>
            <div className={styles.cardGrid}>
              {curricula.map((literacy) => (
                <LiteracyCard
                  key={literacy.href}
                  {...literacy}
                  isCurrent={literacy.href === currentSiteHref}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around mental models that help students transition
            from blindly following health rules to actively managing their own biological systems.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from baseline telemetry and fuel chemistry through
            immune systems and sleep science, culminating in a personal health optimization
            protocol that students design, test, and present.
          </p>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Health Systems Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with the Welcome page for an overview, then jump into Week 1.
            Each session is about 20 minutes — designed for ages 8–12.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/literacy-for-kids/health_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
