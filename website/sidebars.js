// @ts-check

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const currentSiteHref = 'https://literacy-for-kids.github.io/health_literacy_for_kids/';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'The Control Loops',
      description: 'Weeks 1–3: Baseline telemetry and homeostasis',
      collapsed: false,
      items: [
        'week01-homeostasis',
        'week02-feedback-loops',
        'week03-the-bio-telemetry-baseline',
      ],
    },
    {
      type: 'category',
      label: 'The Chemical Plant',
      description: 'Weeks 4–7: Fuel processing, energy, and structural nutrients',
      items: [
        'week04-fuel-and-energy',
        'week05-macronutrients',
        'week06-glucose-and-insulin',
        'week07-the-fuel-audit',
      ],
    },
    {
      type: 'category',
      label: 'System Security and Threat Response',
      description: 'Weeks 8–10: Virology, immunology, and the physical hull',
      items: [
        'week08-the-immune-system',
        'week09-threat-response',
        'week10-the-outbreak-postmortem',
      ],
    },
    {
      type: 'category',
      label: 'Preventative Maintenance',
      description: 'Weeks 11–14: Circadian rhythms, sleep architecture, and wear',
      items: [
        'week11-circadian-rhythms',
        'week12-sleep-architecture',
        'week13-the-microbiome',
        'week14-wear-and-maintenance',
      ],
    },
    {
      type: 'category',
      label: 'The Optimization Protocol',
      description: 'Weeks 15–18: Design, test, and iterate a personal health system',
      items: [
        'week15-protocol-design',
        'week16-environment-engineering',
        'week17-protocol-testing',
        'week18-the-maintenance-showcase',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      description: 'Optional extension weeks',
      items: [
        'week-optional-1-the-microbiome-advanced',
        'week-optional-2-stress-physiology',
      ],
    },
    'curriculum-overview',
    'glossary',
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {type: 'link', label: hub.label, href: hub.href},
        ...curricula
          .filter((curriculum) => curriculum.href !== currentSiteHref)
          .map((curriculum) => ({
            type: 'link',
            label: curriculum.label,
            href: curriculum.href,
          })),
      ],
    },
    'license',
  ],
};

export default sidebars;
