import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NovarchV2.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';
const INSTAGRAM_DM_URL = 'https://ig.me/m/_novarch.ai';
const mailto = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const content = {
  de: {
    lang: 'DE', switchPath: '/en', switchLabel: 'EN',
    nav: [['Sprint', '#sprint'], ['System', '#system'], ['Ablauf', '#process'], ['Team', '#team']],
    emailSubject: 'Anfrage zum NOVARCH Kampagnen-Sprint',
    cta: 'Pilot anfragen', secondary: 'System ansehen',
    eyebrow: 'NOVARCH · ILMENAU, DEUTSCHLAND',
    heroA: 'Gute Arbeit.', heroB: 'Klarer Marktweg.',
    heroText: 'Wir verwandeln eine konkrete Leistung in eine regionale Kampagne — mit klarer Botschaft, passenden Assets und einem messbaren Weg bis zur Anfrage.',
    heroNote: 'Kein Content-Abo. Kein Reichweitenversprechen. Ein fokussierter kommerzieller Test.',
    signalLabel: 'KAMPAGNEN-SYSTEM', signalStatus: 'PILOT AKTIV',
    signalSteps: ['LEISTUNG', 'ZIELGRUPPE', 'BOTSCHAFT', 'ANFRAGE'],
    proof: [['01', 'Leistung'], ['14', 'Tage bis Launch'], ['30', 'Tage Messfenster']],
    tensionEyebrow: 'DIE LÜCKE', tensionTitle: 'Ihre Arbeit überzeugt. Ihr Marktweg vielleicht noch nicht.',
    tensionText: 'Lokale Unternehmen brauchen nicht automatisch mehr Posts. Sie brauchen eine klare Antwort auf drei Fragen: Welche Leistung soll wachsen? Wen muss sie erreichen? Was soll diese Person als Nächstes tun?',
    focusCards: [
      ['01', 'Eine Leistung', 'Wir wählen nicht alles. Wir fokussieren das Angebot mit echtem Umsatz- und Kapazitätspotenzial.'],
      ['02', 'Eine Zielgruppe', 'Wir verdichten Recherche und Kundensprache zu einer Botschaft, die verstanden wird.'],
      ['03', 'Ein messbarer Weg', 'Aufmerksamkeit endet nicht im Feed, sondern führt zu einer nachvollziehbaren Anfrage oder Buchung.'],
    ],
    sprintEyebrow: 'DER PILOT', sprintTitle: 'Ein Kampagnen-Sprint. Von Recherche bis Tag 30.',
    sprintText: 'Ein klar begrenzter Aufbau für Unternehmen, die eine konkrete Leistung gezielt auslasten und dabei lernen möchten, was im Markt Resonanz erzeugt.',
    deliverables: ['Angebots-, Zielgruppen- und Wettbewerbsrecherche', 'Kampagnenstrategie und Botschaft', 'Kernassets für ausgewählte Kanäle', 'Anfrageweg, Antwortvorlagen und Lead-Übersicht', 'Tag-30-Auswertung mit nächsten Schritten'],
    systemEyebrow: 'DAS SYSTEM', systemTitle: 'Nicht fünf Einzelleistungen. Ein zusammenhängender Weg.',
    systemText: 'NOVARCH verbindet Recherche, Kreation, Distribution und Messung. Dadurch wird sichtbar, wo eine Kampagne trägt — und wo sie bricht.',
    flow: [['01', 'DISCOVER', 'Markt, Angebot und Sprache verstehen'], ['02', 'DESIGN', 'Botschaft, Assets und Anfrageweg bauen'], ['03', 'DEPLOY', 'Kanäle aktivieren und Reaktionen erfassen'], ['04', 'DECIDE', 'Ergebnisse auswerten und nächsten Test wählen']],
    processEyebrow: 'SO ARBEITEN WIR', processTitle: 'Klein genug zum Starten. Ernst genug zum Messen.',
    process: [['TAG 01–03', 'Fokussieren', 'Leistung, Zielgruppe und Ziel festlegen.'], ['TAG 04–10', 'Bauen', 'Kampagne, Assets und Conversion-Pfad erstellen.'], ['BIS TAG 14', 'Starten', 'Ausgewählte Kanäle live schalten.'], ['BIS TAG 30', 'Lernen', 'Signale, Anfragen und Brüche dokumentieren.']],
    priceEyebrow: 'FOUNDING PILOT', price: '499 €', priceTitle: 'Ein fester Scope. Ein ehrlicher Test.',
    priceText: 'Optionales Werbebudget oder zusätzliche Leistungen werden vorher separat vereinbart. Wir garantieren keine Kundenzahl — wir garantieren einen strukturierten, umgesetzten und ausgewerteten Versuch.',
    who: 'Für lokale Dienstleister mit einem echten Angebot, freier Kapazität und der Bereitschaft, einen fokussierten Marktversuch umzusetzen.',
    teamEyebrow: 'NOVARCH', teamTitle: 'Gebaut zwischen Produktdenken, Operations und technischer Umsetzung.',
    team: [['Massum Abbas', 'Founder · Product & Systems'], ['Melissa Pia Mehrle', 'Operations & Business'], ['Qasim', 'Technology & Product Development']],
    finalEyebrow: 'BEREIT FÜR EINEN ECHTEN TEST?', finalTitle: 'Welche Leistung soll als Nächstes wachsen?',
    finalText: 'Schreiben Sie uns die eine Leistung, die Sie gezielt auslasten möchten. Wir sagen Ihnen ehrlich, ob sie für den Sprint geeignet ist.',
    footer: 'Messbare Kampagnen und Workflow-Systeme aus Ilmenau.',
  },
  en: {
    lang: 'EN', switchPath: '/', switchLabel: 'DE',
    nav: [['Sprint', '#sprint'], ['System', '#system'], ['Process', '#process'], ['Team', '#team']],
    emailSubject: 'NOVARCH Campaign Sprint enquiry',
    cta: 'Request a pilot', secondary: 'See the system',
    eyebrow: 'NOVARCH · BUILT IN GERMANY',
    heroA: 'Good work.', heroB: 'A clear market path.',
    heroText: 'We turn one concrete service into a focused campaign — with a clear message, channel-ready assets and a measurable path to enquiry.',
    heroNote: 'Not a content subscription. Not a reach promise. A focused commercial test.',
    signalLabel: 'CAMPAIGN SYSTEM', signalStatus: 'PILOT ACTIVE',
    signalSteps: ['OFFER', 'AUDIENCE', 'MESSAGE', 'ENQUIRY'],
    proof: [['01', 'Service'], ['14', 'Days to launch'], ['30', 'Day measurement window']],
    tensionEyebrow: 'THE GAP', tensionTitle: 'Your work may be strong. Your path to market may not be — yet.',
    tensionText: 'Local service businesses do not automatically need more posts. They need clear answers to three questions: Which service should grow? Who needs to see it? What should that person do next?',
    focusCards: [
      ['01', 'One service', 'We do not promote everything. We focus the offer with real revenue and capacity potential.'],
      ['02', 'One audience', 'We turn research and customer language into a message people can understand.'],
      ['03', 'One measurable path', 'Attention does not end in the feed. It leads to a traceable enquiry or booking.'],
    ],
    sprintEyebrow: 'THE PILOT', sprintTitle: 'One Campaign Sprint. From research through day 30.',
    sprintText: 'A tightly scoped build for businesses that want to fill capacity for one service and learn what creates real market response.',
    deliverables: ['Offer, audience and competitor research', 'Campaign strategy and message', 'Core assets for selected channels', 'Enquiry path, response scripts and lead overview', 'Day-30 review with next actions'],
    systemEyebrow: 'THE SYSTEM', systemTitle: 'Not five disconnected services. One connected path.',
    systemText: 'NOVARCH connects research, creative, distribution and measurement. That makes it visible where a campaign works — and where it breaks.',
    flow: [['01', 'DISCOVER', 'Understand market, offer and language'], ['02', 'DESIGN', 'Build message, assets and enquiry path'], ['03', 'DEPLOY', 'Activate channels and capture response'], ['04', 'DECIDE', 'Review evidence and choose the next test']],
    processEyebrow: 'HOW WE WORK', processTitle: 'Small enough to start. Serious enough to measure.',
    process: [['DAY 01–03', 'Focus', 'Set the service, audience and target.'], ['DAY 04–10', 'Build', 'Create the campaign, assets and conversion path.'], ['BY DAY 14', 'Launch', 'Activate the selected channels.'], ['THROUGH DAY 30', 'Learn', 'Document signals, enquiries and friction.']],
    priceEyebrow: 'FOUNDING PILOT', price: '€499', priceTitle: 'A fixed scope. An honest test.',
    priceText: 'Optional ad spend or additional work is agreed separately in advance. We do not guarantee a number of customers — we guarantee a structured test that is built, launched and reviewed.',
    who: 'For service businesses with a real offer, available capacity and the willingness to run a focused market experiment.',
    teamEyebrow: 'NOVARCH', teamTitle: 'Built across product thinking, operations and technical execution.',
    team: [['Massum Abbas', 'Founder · Product & Systems'], ['Melissa Pia Mehrle', 'Operations & Business'], ['Qasim', 'Technology & Product Development']],
    finalEyebrow: 'READY FOR A REAL TEST?', finalTitle: 'Which service should grow next?',
    finalText: 'Send us the one service you want to fill. We will tell you honestly whether it is a fit for the sprint.',
    footer: 'Measurable campaigns and workflow systems from Ilmenau, Germany.',
  },
};

function useReveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll('[data-reveal]')];
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('revealed'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /></span>;
}

function Brand() {
  return <a className="brand" href="#top"><Mark /><span>NOVARCH</span></a>;
}

function Button({ t, dark = false }) {
  return <a className={`button ${dark ? 'button-dark' : ''}`} href={mailto(t.emailSubject)}>{t.cta}<span>↗</span></a>;
}

function Header({ t }) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-header ${compact ? 'compact' : ''}`}>
      <Brand />
      <nav>{t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="header-actions"><a className="language" href={t.switchPath}>{t.switchLabel}</a><Button t={t} /></div>
    </header>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'light' : ''}`}><span />{children}</p>;
}

function CampaignVisual({ t }) {
  return (
    <div className="campaign-visual" aria-label={t.signalLabel}>
      <div className="visual-head"><span>{t.signalLabel}</span><em><i />{t.signalStatus}</em></div>
      <div className="signal-orbit"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit-core"><Mark /></div><span className="pulse pulse-a" /><span className="pulse pulse-b" /></div>
      <div className="signal-steps">{t.signalSteps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < t.signalSteps.length - 1 && <i>→</i>}</div>)}</div>
      <div className="visual-foot"><span>RESEARCH-LED</span><span>CHANNEL-READY</span><span>MEASURABLE</span></div>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow glow-a" /><div className="hero-glow glow-b" />
      <div className="wrap hero-layout">
        <div className="hero-copy" data-reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1><span>{t.heroA}</span>{t.heroB}</h1>
          <p className="hero-lede">{t.heroText}</p>
          <p className="hero-note">{t.heroNote}</p>
          <div className="hero-actions"><Button t={t} /><a className="quiet-link" href="#system">{t.secondary}<span>↓</span></a></div>
        </div>
        <div data-reveal className="visual-wrap"><CampaignVisual t={t} /></div>
      </div>
      <div className="wrap proof-strip">{t.proof.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
    </section>
  );
}

function Gap({ t }) {
  return (
    <section className="section section-paper">
      <div className="wrap">
        <div className="editorial-grid" data-reveal><Eyebrow>{t.tensionEyebrow}</Eyebrow><h2>{t.tensionTitle}</h2><p>{t.tensionText}</p></div>
        <div className="focus-grid">{t.focusCards.map(([n, title, body]) => <article key={n} data-reveal><span>{n}</span><div className="card-line" /><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>
  );
}

function Sprint({ t }) {
  return (
    <section className="section section-ink" id="sprint">
      <div className="wrap sprint-grid">
        <div data-reveal><Eyebrow light>{t.sprintEyebrow}</Eyebrow><h2>{t.sprintTitle}</h2><p className="section-lede">{t.sprintText}</p><Button t={t} /></div>
        <div className="deliverables" data-reveal>{t.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><i>↗</i></div>)}</div>
      </div>
    </section>
  );
}

function System({ t }) {
  return (
    <section className="section system-section" id="system">
      <div className="wrap">
        <div className="system-intro" data-reveal><Eyebrow>{t.systemEyebrow}</Eyebrow><h2>{t.systemTitle}</h2><p>{t.systemText}</p></div>
        <div className="flow-grid">{t.flow.map(([n, title, body], index) => <article key={n} data-reveal><div><span>{n}</span>{index < t.flow.length - 1 && <i>↗</i>}</div><strong>{title}</strong><p>{body}</p></article>)}</div>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section className="section process-section" id="process">
      <div className="wrap">
        <div className="process-heading" data-reveal><Eyebrow>{t.processEyebrow}</Eyebrow><h2>{t.processTitle}</h2></div>
        <div className="timeline">{t.process.map(([time, title, body], index) => <article key={time} data-reveal><span>{time}</span><div className="timeline-dot">{index + 1}</div><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </div>
    </section>
  );
}

function Offer({ t }) {
  return (
    <section className="section offer-section">
      <div className="wrap offer-card" data-reveal>
        <div><Eyebrow light>{t.priceEyebrow}</Eyebrow><strong className="price">{t.price}</strong></div>
        <div><h2>{t.priceTitle}</h2><p>{t.priceText}</p><div className="fit-note"><span>✓</span>{t.who}</div></div>
        <Button t={t} dark />
      </div>
    </section>
  );
}

function Team({ t }) {
  return (
    <section className="section team-section" id="team">
      <div className="wrap">
        <div className="team-head" data-reveal><Eyebrow>{t.teamEyebrow}</Eyebrow><h2>{t.teamTitle}</h2></div>
        <div className="team-list">{t.team.map(([name, role], index) => <div key={name} data-reveal><span>0{index + 1}</span><strong>{name}</strong><p>{role}</p></div>)}</div>
      </div>
    </section>
  );
}

function FinalCTA({ t }) {
  return (
    <section className="final-cta" id="contact"><div className="final-grid" aria-hidden="true" /><div className="wrap" data-reveal><Eyebrow light>{t.finalEyebrow}</Eyebrow><h2>{t.finalTitle}</h2><p>{t.finalText}</p><div><Button t={t} /><a href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer">Instagram DM ↗</a></div></div></section>
  );
}

function Footer({ t }) {
  return (
    <footer className="site-footer"><div className="wrap footer-grid"><div><Brand /><p>{t.footer}</p></div><div className="footer-links"><a href={mailto(t.emailSubject)}>{CONTACT_EMAIL}</a><a href={INSTAGRAM_DM_URL} target="_blank" rel="noreferrer">Instagram</a><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Datenschutz</Link></div><div className="footer-bottom"><span>© 2026 NOVARCH — Massum Abbas</span><span>ILMENAU · GERMANY</span><a href={t.switchPath}>{t.switchLabel}</a></div></div></footer>
  );
}

function NovarchLanding({ initialLanguage = 'de' }) {
  const t = content[initialLanguage] || content.de;
  useReveal();
  useEffect(() => {
    const english = initialLanguage === 'en';
    document.documentElement.lang = english ? 'en' : 'de';
    document.title = english
      ? 'NOVARCH | Measurable campaigns for service businesses'
      : 'NOVARCH | Messbare Kampagnen für lokale Unternehmen';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', english
        ? 'NOVARCH builds focused, measurable campaign sprints for service businesses — from research and creative through launch and day-30 review.'
        : 'NOVARCH entwickelt messbare Kampagnen-Sprints für lokale Dienstleistungsunternehmen — von Recherche und Kreation bis Launch und Tag-30-Auswertung.');
    }
  }, [initialLanguage]);
  return <div className="novarch-site"><Header t={t} /><main><Hero t={t} /><Gap t={t} /><Sprint t={t} /><System t={t} /><Process t={t} /><Offer t={t} /><Team t={t} /><FinalCTA t={t} /></main><Footer t={t} /></div>;
}

export default NovarchLanding;
