import React from 'react';
import './NovarchV2.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/_novarch.ai/';

const mailto = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const copy = {
  de: {
    path: '/',
    switchPath: '/en',
    switchLabel: 'EN',
    nav: [
      ['Agent', '#agent'],
      ['Sprint', '#sprint'],
      ['Für wen', '#use-cases'],
      ['Vision', '#vision'],
      ['Team', '#team'],
    ],
    cta: 'Review anfragen',
    instagram: 'Auf Instagram schreiben',
    emailSubject: 'Visibility Review Anfrage',
    heroKicker: 'NOVARCH Visibility Agent',
    heroTitle: 'Ihr Business braucht keine zufälligen Posts. Es braucht ein Sichtbarkeitssystem.',
    heroText: 'NOVARCH hilft Marken, Creatorn und lokalen Unternehmen, klarer, sichtbarer und konsistenter online aufzutreten — mit Strategie, Content Assets und einem einfachen Execution Workflow.',
    heroNote: 'Aus Deutschland aufgebaut. International gedacht. Für Unternehmen, die nicht nur posten, sondern sichtbar werden wollen.',
    heroBadges: ['KI-gestützt', 'Menschlich geprüft', 'Umsetzungsorientiert'],
    agentTitle: 'Der Visibility Agent findet, was Ihr Business besser zeigen sollte.',
    agentText: 'Wir analysieren Ihr Angebot, Ihre Zielgruppe, Ihre vorhandenen Inhalte und Ihre ungenutzten Chancen. Daraus entsteht eine klare Richtung für Sichtbarkeit — nicht einfach ein Stapel zufälliger Content-Ideen.',
    signals: ['Angebot & Wert', 'Zielgruppe', 'Website / Instagram', 'Bisherige Inhalte', 'Story & Positionierung', 'Ungenutzte Chancen'],
    sprintTitle: '14-Day Visibility Sprint',
    sprintIntro: 'In 14 Tagen bauen wir die erste nutzbare Version Ihres Sichtbarkeitssystems — mit echten Assets, klarer Richtung und einem einfachen Workflow.',
    price: 'Pilot Sprint ab 499 €',
    deliverables: ['Visibility Direction Map', 'Content Angles & Hooks', 'Ready-to-post Assets', 'Reel- / Video-Ideen', '14-Tage Postingplan', 'Execution Workflow', 'Review Call'],
    processTitle: 'So läuft der Sprint ab.',
    process: [
      ['01', 'Analyse', 'Wir verstehen Ihr Business, Ihre Ziele, Ihre Inhalte und Ihre aktuelle Online-Präsenz.'],
      ['02', 'Richtung', 'Wir definieren, was sichtbar werden soll und warum es für Ihre Zielgruppe relevant ist.'],
      ['03', 'Assets', 'Wir erstellen konkrete Inhalte, Hooks, Post-Ideen und umsetzbare Vorlagen.'],
      ['04', 'Workflow', 'Sie bekommen einen einfachen 14-Tage-Plan und klare nächste Schritte.'],
    ],
    useTitle: 'Für lokale Unternehmen, Creator und internationale Brands.',
    useText: 'Ilmenau, Thüringen und Deutschland sind unser erster Markt. Gleichzeitig ist NOVARCH international gedacht — auch für Online-Shops, DTC-Brands und founder-led Businesses außerhalb Deutschlands.',
    useCases: [
      ['Lokale Unternehmen', 'Für Dienstleister, Studios, Praxen, Cafés, Shops und lokale Marken, die online professioneller sichtbar werden wollen.'],
      ['Creator & Founder', 'Für Menschen mit Angebot, Persönlichkeit oder Expertise, die klarer kommunizieren und konsistenter auftreten wollen.'],
      ['E-Commerce / DTC', 'Für Produktmarken, die Produktseiten, Reviews, FAQs und bestehende Assets in Content und Workflows verwandeln wollen.'],
    ],
    proofTitle: 'Wir testen zuerst an NOVARCH selbst.',
    proofText: 'Unsere eigene Sichtbarkeit wird mit demselben System aufgebaut, das wir für Kunden einsetzen: Analyse, Richtung, Content Assets, Workflow und Iteration. Das macht NOVARCH nicht nur zu einer Marke — sondern zum ersten Proof Case.',
    visionTitle: 'Mehr als Content: NOVARCH baut Workflow-Systeme.',
    visionText: 'Der Visibility Agent ist unser erster marktnaher Anwendungsfall. Langfristig entwickelt NOVARCH KI-gestützte Systeme, die verstreute Informationen, Signale und Gespräche in klare nächste Schritte verwandeln — für Menschen, Teams, Unternehmen und Institutionen.',
    visionItems: ['Signals', 'Context', 'Next Actions', 'Follow-up', 'Execution'],
    teamTitle: 'Das Team hinter NOVARCH',
    teamText: 'Ein kleines, internationales Gründungsteam mit technischem, operativem und produktorientiertem Fokus.',
    contactTitle: 'Bereit, Ihr Business sichtbarer zu machen?',
    contactText: 'Schreiben Sie uns für einen Visibility Review. Wir schauen uns Ihr Business an und zeigen, welche Sichtbarkeitschancen bereits vorhanden sind.',
    footerLine: 'Sichtbarkeitssysteme für Marken, Creator und lokale Unternehmen.',
    legalNote: 'Impressum und Datenschutzerklärung werden für den öffentlichen Launch ergänzt. Kontakt aktuell über E-Mail oder Instagram.',
  },
  en: {
    path: '/en',
    switchPath: '/',
    switchLabel: 'DE',
    nav: [
      ['Agent', '#agent'],
      ['Sprint', '#sprint'],
      ['Use cases', '#use-cases'],
      ['Vision', '#vision'],
      ['Team', '#team'],
    ],
    cta: 'Request review',
    instagram: 'Message on Instagram',
    emailSubject: 'Visibility Review Request',
    heroKicker: 'NOVARCH Visibility Agent',
    heroTitle: 'Your business does not need random posts. It needs a visibility system.',
    heroText: 'NOVARCH helps brands, creators and local businesses become clearer, more visible and more consistent online — with strategy, content assets and a simple execution workflow.',
    heroNote: 'Built from Germany. Designed to work internationally. For businesses that want to be visible on purpose.',
    heroBadges: ['AI-supported', 'Human-reviewed', 'Execution-focused'],
    agentTitle: 'The Visibility Agent finds what your business should show better.',
    agentText: 'We analyse your offer, audience, existing content and unused opportunities. Then we turn that into a practical visibility direction — not just a list of random content ideas.',
    signals: ['Offer & value', 'Audience', 'Website / Instagram', 'Existing content', 'Story & positioning', 'Unused opportunities'],
    sprintTitle: '14-Day Visibility Sprint',
    sprintIntro: 'In 14 days, we build the first usable version of your visibility system — with real assets, clear direction and a simple workflow.',
    price: 'Pilot Sprint from €499',
    deliverables: ['Visibility Direction Map', 'Content Angles & Hooks', 'Ready-to-post Assets', 'Reel / video ideas', '14-day posting plan', 'Execution workflow', 'Review call'],
    processTitle: 'How the sprint works.',
    process: [
      ['01', 'Analyse', 'We understand your business, goals, content and current online presence.'],
      ['02', 'Direction', 'We define what should become visible and why it matters to your audience.'],
      ['03', 'Assets', 'We create concrete content, hooks, post ideas and usable templates.'],
      ['04', 'Workflow', 'You receive a simple 14-day plan and clear next steps.'],
    ],
    useTitle: 'For local businesses, creators and international brands.',
    useText: 'Ilmenau, Thuringia and Germany are our first market. At the same time, NOVARCH is designed internationally — including ecommerce stores, DTC brands and founder-led businesses outside Germany.',
    useCases: [
      ['Local businesses', 'For service providers, studios, practices, cafés, shops and local brands that want a more professional online presence.'],
      ['Creators & founders', 'For people with an offer, personality or expertise who want to communicate clearly and show up consistently.'],
      ['Ecommerce / DTC', 'For product brands that want to turn product pages, reviews, FAQs and existing assets into content and workflows.'],
    ],
    proofTitle: 'We are testing it on NOVARCH first.',
    proofText: 'Our own visibility is being built with the same system we use for clients: analysis, direction, content assets, workflow and iteration. NOVARCH is not only the brand — it is the first proof case.',
    visionTitle: 'More than content: NOVARCH builds workflow systems.',
    visionText: 'The Visibility Agent is our first market-facing use case. Long-term, NOVARCH is building AI-supported systems that turn scattered information, signals and conversations into clear next actions — for people, teams, businesses and institutions.',
    visionItems: ['Signals', 'Context', 'Next Actions', 'Follow-up', 'Execution'],
    teamTitle: 'The team behind NOVARCH',
    teamText: 'A small international founding team with technical, operational and product-focused depth.',
    contactTitle: 'Ready to make your business more visible?',
    contactText: 'Message us for a Visibility Review. We will look at your business and show what visibility opportunities are already there.',
    footerLine: 'Visibility systems for brands, creators and local businesses.',
    legalNote: 'Imprint and privacy policy will be added for the public launch. Contact currently works through email or Instagram.',
  },
};

const team = [
  ['Mesum Abbas', 'Founder / Product & Systems', 'Technical founder focused on AI workflows, visibility systems and market execution.', 'MA'],
  ['Melissa Pia Mehrle', 'Co-Founder / Operations & Business', 'Finance, operations and business structure.', 'MM'],
  ['Qasim', 'Technology / Product Development', 'Software, prototyping and technical execution support.', 'QA'],
];

function Logo() {
  return (
    <a className="nv-logo" href="#hero" aria-label="NOVARCH home">
      <span className="nv-mark">N</span>
      <span>NOVARCH</span>
    </a>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

function Header({ t }) {
  return (
    <header className="nv-header">
      <Logo />
      <nav className="nv-nav" aria-label="Main navigation">
        {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="nv-header-actions">
        <a className="language-switch" href={t.switchPath}>{t.switchLabel}</a>
        <a className="nv-header-cta" href={mailto(t.emailSubject)}>{t.cta}</a>
      </div>
    </header>
  );
}

function HeroVisual({ t }) {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-card main-card">
        <span>Visibility Agent</span>
        <strong>Analyse → Assets → Workflow</strong>
        <p>{t.heroBadges.join(' · ')}</p>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="mini-card card-one">Clarity</div>
      <div className="mini-card card-two">Content</div>
      <div className="mini-card card-three">Execution</div>
    </div>
  );
}

function NovarchLanding({ initialLanguage = 'de' }) {
  const t = copy[initialLanguage] || copy.de;

  return (
    <div className="novarch-v2">
      <Header t={t} />
      <main>
        <section className="nv-section hero-section" id="hero">
          <div className="section-inner hero-inner">
            <div className="hero-copy">
              <SectionLabel>{t.heroKicker}</SectionLabel>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroText}</p>
              <p className="hero-note">{t.heroNote}</p>
              <div className="hero-actions">
                <a className="primary-btn" href={mailto(t.emailSubject)}>{t.cta}</a>
                <a className="secondary-btn" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{t.instagram}</a>
              </div>
              <div className="trust-row">
                {t.heroBadges.map((badge) => <span key={badge}>{badge}</span>)}
              </div>
            </div>
            <HeroVisual t={t} />
          </div>
        </section>

        <section className="nv-section agent-section" id="agent">
          <div className="section-inner two-column">
            <div className="section-copy">
              <SectionLabel>Visibility Agent</SectionLabel>
              <h2>{t.agentTitle}</h2>
              <p>{t.agentText}</p>
            </div>
            <div className="signal-grid">
              {t.signals.map((signal, index) => <div className="signal-card" key={signal}><span>{String(index + 1).padStart(2, '0')}</span>{signal}</div>)}
            </div>
          </div>
        </section>

        <section className="nv-section sprint-section" id="sprint">
          <div className="section-inner sprint-inner">
            <div className="sprint-card highlight-card">
              <SectionLabel>{t.price}</SectionLabel>
              <h2>{t.sprintTitle}</h2>
              <p>{t.sprintIntro}</p>
              <a className="primary-btn" href={mailto(t.emailSubject)}>{t.cta}</a>
            </div>
            <div className="deliverables-card">
              {t.deliverables.map((item) => <div className="deliverable" key={item}><span>✓</span>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="nv-section process-section">
          <div className="section-inner">
            <div className="section-copy centered">
              <SectionLabel>Workflow</SectionLabel>
              <h2>{t.processTitle}</h2>
            </div>
            <div className="process-grid">
              {t.process.map(([num, title, text]) => <article className="process-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="nv-section use-section" id="use-cases">
          <div className="section-inner">
            <div className="section-copy max-copy">
              <SectionLabel>Markets</SectionLabel>
              <h2>{t.useTitle}</h2>
              <p>{t.useText}</p>
            </div>
            <div className="use-grid">
              {t.useCases.map(([title, text]) => <article className="use-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="nv-section proof-section">
          <div className="section-inner proof-inner">
            <div>
              <SectionLabel>Build in public</SectionLabel>
              <h2>{t.proofTitle}</h2>
              <p>{t.proofText}</p>
            </div>
            <div className="proof-panel">
              <span>01 Analyse</span>
              <span>02 Direction</span>
              <span>03 Assets</span>
              <span>04 Workflow</span>
              <span>05 Iteration</span>
            </div>
          </div>
        </section>

        <section className="nv-section vision-section" id="vision">
          <div className="section-inner vision-inner">
            <div className="section-copy max-copy">
              <SectionLabel>Long-term vision</SectionLabel>
              <h2>{t.visionTitle}</h2>
              <p>{t.visionText}</p>
            </div>
            <div className="vision-rail">
              {t.visionItems.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="nv-section team-section" id="team">
          <div className="section-inner">
            <div className="section-copy max-copy">
              <SectionLabel>Team</SectionLabel>
              <h2>{t.teamTitle}</h2>
              <p>{t.teamText}</p>
            </div>
            <div className="team-grid">
              {team.map(([name, role, text, initials]) => <article className="team-card" key={name}><div className="team-avatar">{initials}</div><h3>{name}</h3><strong>{role}</strong><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="nv-section contact-section" id="contact">
          <div className="section-inner contact-card">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="hero-actions center-actions">
              <a className="primary-btn" href={mailto(t.emailSubject)}>{t.cta}</a>
              <a className="secondary-btn" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="nv-footer">
        <div>
          <Logo />
          <p>{t.footerLine}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href="#legal">Impressum / Datenschutz</a>
          <a href={t.switchPath}>{t.switchLabel}</a>
        </div>
        <p className="legal-note" id="legal">{t.legalNote}</p>
      </footer>
    </div>
  );
}

export default NovarchLanding;
