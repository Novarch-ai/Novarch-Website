import React, { useEffect, useState } from 'react';
import './NovarchV2.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';
const INSTAGRAM_DM_URL = 'https://ig.me/m/_novarch.ai';

const mailto = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const copy = {
  de: {
    switchPath: '/en',
    switchLabel: 'EN',
    nav: [
      ['Angebot', '#offer'],
      ['Ablauf', '#process'],
      ['Für wen', '#for-whom'],
      ['Kontakt', '#contact'],
    ],
    cta: 'Pilot anfragen',
    instagramCta: 'Auf Instagram schreiben',
    emailFallback: 'E-Mail schreiben',
    emailSubject: 'Anfrage zum NOVARCH Kampagnen-Sprint',
    heroSecondary: 'So funktioniert der Sprint ↓',
    heroTitle: 'Eine Leistung. Ein klarer Weg zu neuen Anfragen.',
    heroText: 'NOVARCH entwickelt für eine konkrete Leistung eine regionale Kampagne, bringt sie in 14 Tagen an den Start und macht den Weg bis zur Anfrage oder Buchung messbar.',
    heroNote: 'Ein fokussierter Pilot für lokale Dienstleistungsunternehmen — entwickelt in Ilmenau, ohne leere Reichweitenversprechen.',
    problemEyebrow: 'Das Problem',
    problemTitle: 'Gute Arbeit allein füllt keinen Kalender.',
    problemBody: 'Viele lokale Unternehmen leisten gute Arbeit, aber potenzielle Kunden sehen weder das passende Angebot noch einen klaren nächsten Schritt. Mehr zufällige Posts lösen dieses Problem nicht.',
    problemStat: '1 Angebot',
    problemStatText: 'statt alles gleichzeitig zu bewerben: eine Leistung, eine Zielgruppe und ein nachvollziehbarer Anfrageweg.',
    offerEyebrow: 'Das Angebot',
    offerTitle: 'Der NOVARCH Kampagnen-Sprint',
    offerBody: 'Wir bauen keinen allgemeinen Social-Media-Plan. Wir wählen mit Ihnen eine konkrete Leistung und entwickeln daraus einen umsetzbaren, messbaren Kundengewinnungsversuch.',
    deliverables: [
      ['01', 'Angebots-, Zielgruppen- und Wettbewerbsrecherche'],
      ['02', 'Kampagnenbotschaft und ein klarer Anfrage- oder Buchungsweg'],
      ['03', 'Kerninhalte und Anpassungen für die ausgewählten Kanäle'],
      ['04', 'Antwortvorlagen, Lead-Übersicht und einfache Messstruktur'],
      ['05', 'Auswertung bis Tag 30 mit Erkenntnissen und nächsten Schritten'],
    ],
    processEyebrow: 'Der Ablauf',
    processTitle: 'Von der Leistung zum messbaren Test',
    process: [
      ['01', 'Fokussieren', 'Wir wählen eine Leistung, eine relevante Zielgruppe und ein realistisches Kampagnenziel.'],
      ['02', 'Bauen', 'Wir erstellen Botschaft, Assets, Kanäle und den Weg von der Aufmerksamkeit zur Anfrage.'],
      ['03', 'Starten & messen', 'Die Kampagne startet innerhalb von 14 Tagen; Reaktionen und Anfragen werden bis Tag 30 ausgewertet.'],
    ],
    forWhomEyebrow: 'Für wen',
    forWhomTitle: 'Für Unternehmen, die eine Leistung gezielt auslasten möchten.',
    forWhomBody: 'Für lokale Dienstleister mit einem echten Angebot, freien Kapazitäten und der Bereitschaft, einen fokussierten Kundengewinnungsversuch gemeinsam umzusetzen.',
    pills: ['Kosmetik & Beauty', 'Fitness', 'Praxen', 'Beratung', 'Lokale Services', 'Founder-led Brands'],
    pricingEyebrow: 'Pilotpreis',
    pricingTitle: 'Kampagnen-Sprint: 499 €',
    pricingBody: 'Fester Pilotumfang für die ersten regionalen Unternehmen. Optionales Werbebudget oder zusätzliche Leistungen werden vorab separat vereinbart. Wir versprechen keine bestimmte Zahl an Kunden — wir bauen und messen einen belastbaren Versuch.',
    whyEyebrow: 'Warum NOVARCH',
    whyTitle: 'Nicht mehr Content. Ein klarer kommerzieller Test.',
    whyBody: 'Recherche, Kampagnenassets, Umsetzung und Messung werden als ein zusammenhängender Prozess gebaut. Sie erhalten nicht nur Dateien, sondern Klarheit darüber, was im Markt tatsächlich Resonanz erzeugt.',
    visionTitle: 'Langfristig baut NOVARCH Workflow-Systeme.',
    visionBody: 'Der Kampagnen-Sprint ist ein marktnaher Service. Die größere Richtung bleibt: KI-gestützte Systeme, die verstreute Informationen, Signale und Gespräche in klare nächste Schritte und verlässliches Follow-up verwandeln.',
    visionItems: ['Signals', 'Context', 'Next Actions', 'Follow-up', 'Execution'],
    teamTitle: 'Das Team hinter NOVARCH',
    teamBody: 'Ein kleines, internationales Team mit technischem, operativem und produktorientiertem Fokus.',
    team: [
      ['Mesum Abbas', 'Founder / Product & Systems', 'AI-Workflows, Kampagnensysteme und Marktausführung.'],
      ['Melissa Pia Mehrle', 'Operations & Business', 'Finance, Operations und Business-Struktur.'],
      ['Qasim', 'Technology / Product Development', 'Software, Prototyping und technische Umsetzung.'],
    ],
    ctaTitle: 'Welche Leistung möchten Sie gezielt auslasten?',
    footerLine: 'Messbare Kampagnen und Workflow-Systeme aus Ilmenau.',
    location: 'Ilmenau, Deutschland',
    legalNote: '© 2026 NOVARCH — Massum Abbas.',
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
    cta: 'Request a pilot',
    instagramCta: 'Message us on Instagram',
    emailFallback: 'Send an email',
    emailSubject: 'NOVARCH Campaign Sprint enquiry',
    heroSecondary: 'How the sprint works ↓',
    heroTitle: 'One service. A clear path to new enquiries.',
    heroText: 'NOVARCH develops a regional campaign for one concrete service, launches it within 14 days and makes the path to an enquiry or booking measurable.',
    heroNote: 'A focused pilot for local service businesses — built in Ilmenau, without empty reach promises.',
    problemEyebrow: 'The problem',
    problemTitle: 'Good work alone does not fill a calendar.',
    problemBody: 'Many local businesses do good work, but potential customers do not see the right offer or a clear next step. More random posts do not solve that problem.',
    problemStat: '1 offer',
    problemStatText: 'instead of promoting everything at once: one service, one audience and a traceable enquiry path.',
    offerEyebrow: 'The offer',
    offerTitle: 'The NOVARCH Campaign Sprint',
    offerBody: 'We do not build a generic social media plan. Together, we select one concrete service and turn it into an executable, measurable customer-acquisition experiment.',
    deliverables: [
      ['01', 'Offer, audience and competitor research'],
      ['02', 'Campaign message and a clear enquiry or booking path'],
      ['03', 'Core assets and adaptations for the selected channels'],
      ['04', 'Response scripts, lead overview and simple measurement setup'],
      ['05', 'Day-30 review with findings and next steps'],
    ],
    processEyebrow: 'The process',
    processTitle: 'From service to measurable test',
    process: [
      ['01', 'Focus', 'We select one service, one relevant audience and a realistic campaign goal.'],
      ['02', 'Build', 'We create the message, assets, channels and path from attention to enquiry.'],
      ['03', 'Launch & measure', 'The campaign launches within 14 days; reactions and enquiries are evaluated through day 30.'],
    ],
    forWhomEyebrow: 'For whom',
    forWhomTitle: 'For businesses that want to fill capacity for one service.',
    forWhomBody: 'For local service businesses with a real offer, available capacity and the willingness to run a focused customer-acquisition experiment with us.',
    pills: ['Beauty', 'Fitness', 'Clinics', 'Consulting', 'Local services', 'Founder-led brands'],
    pricingEyebrow: 'Pilot price',
    pricingTitle: 'Campaign Sprint: €499',
    pricingBody: 'A fixed pilot scope for the first regional businesses. Optional ad spend or additional work is agreed separately in advance. We do not promise a fixed number of customers — we build and measure a serious experiment.',
    whyEyebrow: 'Why NOVARCH',
    whyTitle: 'Not more content. A clear commercial test.',
    whyBody: 'Research, campaign assets, execution and measurement are built as one connected process. You receive more than files: you learn what actually creates market response.',
    visionTitle: 'Long-term, NOVARCH builds workflow systems.',
    visionBody: 'The Campaign Sprint is a market-facing service. The larger direction remains: AI-supported systems that turn scattered information, signals and conversations into clear next actions and reliable follow-up.',
    visionItems: ['Signals', 'Context', 'Next Actions', 'Follow-up', 'Execution'],
    teamTitle: 'The team behind NOVARCH',
    teamBody: 'A small international team with technical, operational and product-focused depth.',
    team: [
      ['Mesum Abbas', 'Founder / Product & Systems', 'AI workflows, campaign systems and market execution.'],
      ['Melissa Pia Mehrle', 'Operations & Business', 'Finance, operations and business structure.'],
      ['Qasim', 'Technology / Product Development', 'Software, prototyping and technical execution.'],
    ],
    ctaTitle: 'Which service do you want to fill?',
    footerLine: 'Measurable campaigns and workflow systems from Ilmenau.',
    location: 'Ilmenau, Germany',
    legalNote: '© 2026 NOVARCH — Massum Abbas.',
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

function AuditButton({ t, className = 'primary-btn' }) {
  return (
    <a className={className} href={mailto(t.emailSubject)}>
      {t.cta}
    </a>
  );
}

function InstagramButton({ t, className = 'text-link' }) {
  return (
    <a className={className} href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer">
      {t.instagramCta}
    </a>
  );
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
        <AuditButton t={t} className="nv-header-cta" />
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
            <AuditButton t={t} />
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
        <AuditButton t={t} />
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
        <div className="hero-actions">
          <AuditButton t={t} className="primary-btn dark-btn" />
          <InstagramButton t={t} />
        </div>
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
        <a href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer">Instagram DM</a>
        <a href={mailto(t.emailSubject)}>{t.emailFallback}</a>
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
