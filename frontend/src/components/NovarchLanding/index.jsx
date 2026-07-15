import React, { useEffect, useState } from 'react';
import './NovarchV2.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/_novarch.ai/';

const mailto = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const copy = {
  de: {
    switchPath: '/en',
    switchLabel: 'EN',
    nav: [
      ['Angebot', '#offer'],
      ['Prozess', '#process'],
      ['Für wen', '#for-whom'],
      ['Kontakt', '#contact'],
    ],
    cta: 'Kurzanalyse buchen',
    emailSubject: 'NOVARCH Kurzanalyse Anfrage',
    heroSecondary: 'Wie es funktioniert ↓',
    heroTitle: 'Sichtbarkeit, die zu Anfragen wird.',
    heroText: 'NOVARCH macht aus dem, was Ihr Unternehmen bereits hat, einen klaren, professionellen Online-Auftritt — in 14 Tagen.',
    heroNote: 'Aus Deutschland aufgebaut. International gedacht. Für lokale Unternehmen, Creator und founder-led Brands.',
    problemEyebrow: 'Das Problem',
    problemTitle: 'Sie haben bereits alles, was Sie brauchen.',
    problemBody: 'Gute Arbeit, zufriedene Kunden, echte Expertise. Was fehlt, ist Klarheit darüber, wie man das online zeigt — konsistent, professionell, ohne jeden Tag neu zu überlegen, was man posten soll.',
    problemStat: '14 Tage',
    problemStatText: 'um aus vorhandenem Material eine klare Sichtbarkeitsrichtung und erste nutzbare Inhalte zu bauen.',
    offerEyebrow: 'Das Angebot',
    offerTitle: 'Der 14-Tage Sichtbarkeits-Sprint',
    offerBody: 'Wir entwickeln eine klare Content-Richtung für Ihr Unternehmen, erstellen fertige Inhalte und begleiten Sie durch die ersten 14 Tage der Umsetzung.',
    deliverables: [
      ['01', 'Ein Erstgespräch zur Analyse Ihres aktuellen Auftritts'],
      ['02', 'Eine klare, auf Ihr Unternehmen zugeschnittene Content-Richtung'],
      ['03', 'Fertige Inhalte für 14 Tage'],
      ['04', 'Ein einfacher Umsetzungsplan'],
      ['05', 'Ein Abschlussgespräch mit den nächsten Schritten'],
    ],
    processEyebrow: 'Der Ablauf',
    processTitle: 'Wie es funktioniert',
    process: [
      ['01', 'Verstehen', 'Wir analysieren Ihr Unternehmen, Ihre Kunden und Ihren aktuellen Auftritt.'],
      ['02', 'Ausrichten', 'Wir definieren, wofür Sie online stehen sollen und was Ihre Kunden verstehen müssen.'],
      ['03', 'Umsetzen', 'Wir erstellen fertige Inhalte und begleiten Sie durch die ersten 14 Tage.'],
    ],
    forWhomEyebrow: 'Für wen',
    forWhomTitle: 'Für wen ist das?',
    forWhomBody: 'Lokale Unternehmen, Gründer und Selbstständige, die online professioneller und konsistenter auftreten möchten — ohne selbst Marketing-Experte werden zu müssen.',
    pills: ['Salons', 'Praxen', 'Gastronomie', 'Berater', 'Creator', 'DTC-Brands'],
    pricingEyebrow: 'Preis',
    pricingTitle: 'Sprint ab 499 €',
    pricingBody: 'Begrenztes Pilotangebot für die ersten Unternehmen in der Region. Internationale Projekte und E-Commerce-/DTC-Anwendungsfälle werden passend zum Umfang kalkuliert.',
    whyEyebrow: 'Warum NOVARCH',
    whyTitle: 'Kein Marketing von der Stange.',
    whyBody: 'Wir kommen nicht aus einer Marketing-Fabrik. Wir bauen für jedes Unternehmen ein eigenes System — auf Basis echter Recherche, echter Kundenaussagen und einer klaren Strategie, nicht aus generischen Vorlagen.',
    visionTitle: 'Langfristig baut NOVARCH Workflow-Systeme.',
    visionBody: 'Der Visibility Sprint ist der erste marktreife Anwendungsfall. Die größere Richtung bleibt: KI-gestützte Systeme, die verstreute Informationen, Signale und Gespräche in klare nächste Schritte verwandeln.',
    visionItems: ['Signals', 'Context', 'Next Actions', 'Follow-up', 'Execution'],
    teamTitle: 'Das Team hinter NOVARCH',
    teamBody: 'Ein kleines, internationales Team mit technischem, operativem und produktorientiertem Fokus.',
    team: [
      ['Mesum Abbas', 'Founder / Product & Systems', 'AI-Workflows, Sichtbarkeitssysteme und Marktausführung.'],
      ['Melissa Pia Mehrle', 'Co-Founder / Operations & Business', 'Finance, Operations und Business-Struktur.'],
      ['Qasim', 'Technology / Product Development', 'Software, Prototyping und technische Umsetzung.'],
    ],
    ctaTitle: 'Bereit für einen klareren Auftritt?',
    footerLine: 'Sichtbarkeitssysteme für Marken, Creator und lokale Unternehmen.',
    location: 'Ilmenau, Deutschland',
    legalNote: 'Impressum und Datenschutz sind als Platzhalter verlinkt und müssen vor aktiver Kundengewinnung final ergänzt werden.',
  },
  en: {
    switchPath: '/',
    switchLabel: 'DE',
    nav: [
      ['Offer', '#offer'],
      ['Process', '#process'],
      ['For whom', '#for-whom'],
      ['Contact', '#contact'],
    ],
    cta: 'Book a quick audit',
    emailSubject: 'NOVARCH Visibility Audit Request',
    heroSecondary: 'How it works ↓',
    heroTitle: 'Visibility that turns into inquiries.',
    heroText: 'NOVARCH turns what your business already has into a clear, professional online presence — in 14 days.',
    heroNote: 'Built from Germany. Designed to work internationally. For local businesses, creators and founder-led brands.',
    problemEyebrow: 'The problem',
    problemTitle: 'You already have what you need.',
    problemBody: 'Good work, happy customers, real expertise. What is missing is clarity on how to show it online — consistently, professionally, without having to rethink what to post every day.',
    problemStat: '14 days',
    problemStatText: 'to turn existing material into a clear visibility direction and first usable content assets.',
    offerEyebrow: 'The offer',
    offerTitle: 'The 14-Day Visibility Sprint',
    offerBody: 'We develop a clear content direction for your business, create finished content assets and support you through the first 14 days of execution.',
    deliverables: [
      ['01', 'An initial call to analyse your current online presence'],
      ['02', 'A clear content direction tailored to your business'],
      ['03', 'Finished content assets for 14 days'],
      ['04', 'A simple execution plan'],
      ['05', 'A final review call with next steps'],
    ],
    processEyebrow: 'The process',
    processTitle: 'How it works',
    process: [
      ['01', 'Understand', 'We analyse your business, customers and current online presence.'],
      ['02', 'Align', 'We define what you should stand for online and what your customers need to understand.'],
      ['03', 'Execute', 'We create finished content assets and support you through the first 14 days.'],
    ],
    forWhomEyebrow: 'For whom',
    forWhomTitle: 'Who is this for?',
    forWhomBody: 'Local businesses, founders and independent operators who want to show up more professionally and consistently online — without becoming marketing experts themselves.',
    pills: ['Salons', 'Clinics', 'Restaurants', 'Consultants', 'Creators', 'DTC brands'],
    pricingEyebrow: 'Price',
    pricingTitle: 'Sprint from €499',
    pricingBody: 'Limited pilot offer for the first businesses in the region. International and ecommerce / DTC projects are scoped based on the work required.',
    whyEyebrow: 'Why NOVARCH',
    whyTitle: 'Not generic marketing.',
    whyBody: 'We do not work from a content factory. We build a dedicated system for every business — based on real research, real customer language and a clear strategy, not generic templates.',
    visionTitle: 'Long-term, NOVARCH builds workflow systems.',
    visionBody: 'The Visibility Sprint is the first market-ready use case. The larger direction remains: AI-supported systems that turn scattered information, signals and conversations into clear next actions.',
    visionItems: ['Signals', 'Context', 'Next Actions', 'Follow-up', 'Execution'],
    teamTitle: 'The team behind NOVARCH',
    teamBody: 'A small international team with technical, operational and product-focused depth.',
    team: [
      ['Mesum Abbas', 'Founder / Product & Systems', 'AI workflows, visibility systems and market execution.'],
      ['Melissa Pia Mehrle', 'Co-Founder / Operations & Business', 'Finance, operations and business structure.'],
      ['Qasim', 'Technology / Product Development', 'Software, prototyping and technical execution.'],
    ],
    ctaTitle: 'Ready for a clearer presence?',
    footerLine: 'Visibility systems for brands, creators and local businesses.',
    location: 'Ilmenau, Germany',
    legalNote: 'Imprint and privacy policy are linked as placeholders and need final legal text before active client acquisition.',
  },
};

function useRevealAnimation() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Logo() {
  return (
    <a className="nv-logo" href="#hero" aria-label="NOVARCH home">
      <span className="nv-logo-mark">N</span>
      <span>NOVARCH</span>
    </a>
  );
}

function Header({ t }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nv-header ${scrolled ? 'is-scrolled' : ''}`}>
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

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function HeroSection({ t }) {
  return (
    <section className="hero-section" id="hero">
      <div className="film-grain" aria-hidden="true" />
      <div className="hero-geometry" aria-hidden="true">
        <span className="geo-line line-one" />
        <span className="geo-line line-two" />
        <span className="geo-square" />
      </div>
      <div className="section-inner hero-inner reveal">
        <div>
          <SectionLabel>NOVARCH Visibility Agent</SectionLabel>
          <h1>{t.heroTitle}</h1>
          <p className="hero-lede">{t.heroText}</p>
          <p className="hero-note">{t.heroNote}</p>
          <div className="hero-actions">
            <a className="primary-btn" href={mailto(t.emailSubject)}>{t.cta}</a>
            <a className="text-link" href="#process">{t.heroSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ t }) {
  return (
    <section className="nv-section problem-section">
      <div className="section-inner problem-grid reveal">
        <div className="section-copy wide-copy">
          <SectionLabel>{t.problemEyebrow}</SectionLabel>
          <h2>{t.problemTitle}</h2>
          <p>{t.problemBody}</p>
        </div>
        <aside className="stat-panel">
          <strong>{t.problemStat}</strong>
          <p>{t.problemStatText}</p>
        </aside>
      </div>
    </section>
  );
}

function OfferSection({ t }) {
  return (
    <section className="nv-section offer-section" id="offer">
      <div className="section-inner offer-grid reveal">
        <div className="section-copy">
          <SectionLabel>{t.offerEyebrow}</SectionLabel>
          <h2>{t.offerTitle}</h2>
          <p>{t.offerBody}</p>
        </div>
        <div className="deliverable-list">
          {t.deliverables.map(([num, text]) => (
            <div className="deliverable-row" key={num}>
              <span>{num}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ t }) {
  return (
    <section className="nv-section process-section" id="process">
      <div className="section-inner reveal">
        <div className="section-copy centered-copy">
          <SectionLabel>{t.processEyebrow}</SectionLabel>
          <h2>{t.processTitle}</h2>
        </div>
        <div className="process-grid">
          {t.process.map(([num, title, body]) => (
            <article className="process-card" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhomSection({ t }) {
  return (
    <section className="nv-section for-whom-section" id="for-whom">
      <div className="section-inner for-whom-grid reveal">
        <div className="section-copy wide-copy">
          <SectionLabel>{t.forWhomEyebrow}</SectionLabel>
          <h2>{t.forWhomTitle}</h2>
          <p>{t.forWhomBody}</p>
        </div>
        <div className="pill-wrap">
          {t.pills.map((pill) => <span key={pill}>{pill}</span>)}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ t }) {
  return (
    <section className="nv-section pricing-section">
      <div className="section-inner pricing-card reveal">
        <SectionLabel>{t.pricingEyebrow}</SectionLabel>
        <h2>{t.pricingTitle}</h2>
        <p>{t.pricingBody}</p>
        <a className="primary-btn" href={mailto(t.emailSubject)}>{t.cta}</a>
      </div>
    </section>
  );
}

function WhyNovarchSection({ t }) {
  return (
    <section className="nv-section why-section">
      <div className="section-inner why-grid reveal">
        <div className="section-copy">
          <SectionLabel>{t.whyEyebrow}</SectionLabel>
          <h2>{t.whyTitle}</h2>
          <p>{t.whyBody}</p>
        </div>
        <div className="vision-card">
          <h3>{t.visionTitle}</h3>
          <p>{t.visionBody}</p>
          <div className="vision-rail">
            {t.visionItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
      <div className="section-inner team-block reveal">
        <div className="section-copy wide-copy">
          <SectionLabel>Team</SectionLabel>
          <h2>{t.teamTitle}</h2>
          <p>{t.teamBody}</p>
        </div>
        <div className="team-grid">
          {t.team.map(([name, role, body]) => (
            <article className="team-card" key={name}>
              <h3>{name}</h3>
              <strong>{role}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ t }) {
  return (
    <section className="cta-section" id="contact">
      <div className="section-inner cta-card reveal">
        <h2>{t.ctaTitle}</h2>
        <a className="primary-btn dark-btn" href={mailto(t.emailSubject)}>{t.cta}</a>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="nv-footer">
      <div>
        <Logo />
        <p>{t.footerLine}</p>
        <small>{t.location}</small>
      </div>
      <nav>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href={t.switchPath}>{t.switchLabel}</a>
      </nav>
      <p className="footer-note">{t.legalNote}</p>
    </footer>
  );
}

function NovarchLanding({ initialLanguage = 'de' }) {
  const t = copy[initialLanguage] || copy.de;
  useRevealAnimation();

  return (
    <div className="novarch-v2">
      <Header t={t} />
      <main>
        <HeroSection t={t} />
        <ProblemSection t={t} />
        <OfferSection t={t} />
        <ProcessSection t={t} />
        <ForWhomSection t={t} />
        <PricingSection t={t} />
        <WhyNovarchSection t={t} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default NovarchLanding;
