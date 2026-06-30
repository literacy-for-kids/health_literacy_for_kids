import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {hub, curricula} from 'literacy-site-theme/ecosystem';
import styles from './styles.module.css';

const features = [
  {
    title: 'Body Clues Are Information',
    description:
      'Kids learn that hunger, thirst, shivering, sleepiness, and other clues are part of the body autopilot story, not proof that a body is bad or failing.',
  },
  {
    title: 'Different Foods Do Different Jobs',
    description:
      'Food is taught through jobs and patterns instead of good-food or bad-food labels, so learners can study energy and repair without shame.',
  },
  {
    title: 'Sleep Is Night Cleanup and Repair',
    description:
      'The cleanup crew, repair crew, and memory librarian help kids picture sleep as active body work instead of empty downtime.',
  },
  {
    title: 'Your Body Has a Security Team',
    description:
      'Walls, sticky traps, guards, messengers, and memory keepers make immune-system science easier to picture without the heavy jargon.',
  },
  {
    title: 'The Capstone Is a Body Mystery Project',
    description:
      'Students pick one safe body question, collect clues, and can share privately, partially, or with fictional examples. No change is a real finding.',
  },
];

const roadmapSections = [
  {
    title: 'Body Autopilot and Steadying Loops',
    weeks: 'Weeks 1–3',
    description: 'Body clues, steadying loops, and heart calming-down checks',
  },
  {
    title: 'Food Journey and Body Clues',
    weeks: 'Weeks 4–7',
    description: 'The journey of one bite, food jobs, and gentle pattern detective work',
  },
  {
    title: 'Body Security Team and Response Stories',
    weeks: 'Weeks 8–10',
    description: 'Protection, symptoms, and illness story maps',
  },
  {
    title: 'Body Clock, Cleanup, and Repair',
    weeks: 'Weeks 11–14',
    description: 'Daily rhythm, night cleanup, gut helpers, and movement',
  },
  {
    title: 'The Body Mystery Project',
    weeks: 'Weeks 15–18',
    description: 'Pick a safe question, collect clues, and share what you discovered',
  },
];

const currentSiteHref = 'https://health.literacy-for-kids.com/';

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
  const roadmapImageUrl = useBaseUrl('/img/roadmap.png');
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Why This Feels Different</Heading>
          <p className={styles.sectionLead}>
            Health Systems Literacy for Kids is an 18-week curriculum for ages 8–12, built for
            classroom teachers, homeschool families, caregivers, and after-school leaders.
            Kids learn to notice body clues, ask what systems may be happening underneath them,
            and build science vocabulary without shame, panic, or pressure to optimize themselves.
            Drawing, roleplay, oral answers, emoji scales, and fictional examples all count.
          </p>
          <div className={styles.versionNote}>
            <p className={styles.versionLabel}>Warm privacy reminder</p>
            <p>
              Food, sleep, illness, mood, and body data never have to be shared publicly.
              Private and pretend examples are built into the curriculum from the start.
            </p>
          </div>
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
          <Heading as="h2">Big Ideas Kids Learn</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around big ideas kids can picture first, then connect
            to technical language when they are ready.
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
          <Heading as="h2">18-Week Roadmap</Heading>
          <p className={styles.sectionLead}>
            The sequence moves from body autopilot and food jobs through the body's security
            team, body clock, night cleanup, and a curiosity-driven Body Mystery Project.
          </p>
          <div className={styles.roadmapVisual}>
            <img
              className={styles.roadmapImage}
              src={roadmapImageUrl}
              alt="Visual roadmap showing the Health Systems Literacy for Kids curriculum sequence"
            />
          </div>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Exploring the Curriculum</Heading>
          <p className={styles.sectionLead}>
            Begin with the Welcome page, then move into Week 1.
            Private, fictional, drawing-based, and oral-response options are built in from the start.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Open the Welcome Page
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
