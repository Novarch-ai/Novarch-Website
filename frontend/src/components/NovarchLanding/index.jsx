import React from 'react';
import './NovarchV2.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Content Engine', href: '/product-content-engine' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Platform', href: '#platform' },
  { label: 'Pilot', href: '#pilot' },
  { label: 'Company', href: '#company' },
];

const signalSources = ['Emails', 'Chats', 'Forms', 'Calls', 'Systems'];

const problemSteps = [
  { title: 'Workshop', icon: 'people', note: 'Attended session on AI study skills' },
  { title: 'Email sent', icon: 'mail', note: 'Follow-up email with resources' },
  { title: 'Advising note', icon: 'edit', note: 'Discussed course plan and goals' },
  { title: 'Career support', icon: 'briefcase', note: 'Explored internship opportunities' },
  { title: 'Transition', icon: 'arrow', note: 'Student moves forward without full context' },
];

const platformModules = [
  { id: '01', title: 'Signal Engine', copy: 'Detects weak signals across touchpoints.', icon: 'radar', position: 'module-one' },
  { id: '02', title: 'Journey Memory', copy: 'Keeps context visible over time.', icon: 'graph', position: 'module-two' },
  { id: '03', title: 'Follow-up Orchestrator', copy: 'Turns signals into owned next actions.', icon: 'flow', position: 'module-three' },
  { id: '04', title: 'AI Briefings', copy: 'Summarizes what changed and what needs attention.', icon: 'doc', position: 'module-four' },
];

const solutionLabels = [
  ['International', 'student support', 'globe'],
  ['Program follow-up', '', 'chat'],
  ['Advising', 'coordination', 'users'],
  ['Study-to-work', 'transition', 'briefcase'],
];

const journeyStages = [
  { title: 'Arrival', icon: 'plane', copy: 'Pre-arrival questions, immigration steps, first-week support' },
  { title: 'Workshop', icon: 'cap', copy: 'Orientation, programs, and community connections' },
  { title: 'Advising', icon: 'users', copy: 'Course planning, check-ins, and guidance' },
  { title: 'Career support', icon: 'briefcase', copy: 'Opportunities, coaching, and employer connections' },
  { title: 'Transition', icon: 'arrow', copy: 'Graduation, work authorization, and next steps' },
];

const pilotTiers = [
  { title: 'Pilot', copy: 'One workflow, one team, fast learning.', icon: 'rocket' },
  { title: 'Program', copy: 'Multiple workflows across a program.', icon: 'network', featured: true },
  { title: 'Institution', copy: 'Broader support coordination at scale.', icon: 'building' },
];

const teamMembers = [
  { name: 'Mesum Abbas', role: 'Founder', focus: 'Product, Systems & Market Execution', initials: 'MA' },
  { name: 'Melissa Pia Mehrle', role: 'Co-founder', focus: 'Operations & Business', initials: 'MM' },
];

function Icon({ type }) {
  switch (type) {
    case 'mail':
      return <svg viewBox="0 0 24 24"><path d="M3.75 6.75h16.5v10.5H3.75z"/><path d="m4.5 7.5 7.5 6 7.5-6"/></svg>;
    case 'edit':
      return <svg viewBox="0 0 24 24"><path d="M5 19h4l10-10-4-4L5 15z"/><path d="m13.5 6.5 4 4"/></svg>;
    case 'briefcase':
      return <svg viewBox="0 0 24 24"><path d="M4 8.5h16v10H4z"/><path d="M9 8.5V6h6v2.5"/><path d="M4 12.5h16"/></svg>;
    case 'arrow':
      return <svg viewBox="0 0 24 24"><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></svg>;
    case 'people':
    case 'users':
      return <svg viewBox="0 0 24 24"><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M2.5 19c.7-3 3-5 6.5-5s5.8 2 6.5 5"/><path d="M17 11.5a2.5 2.5 0 1 0 0-5"/><path d="M16.5 14.5c2.5.3 4.2 1.9 4.8 4.5"/></svg>;
    case 'radar':
      return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M17 7l2-2M5 19l2-2M7 7l5 5"/></svg>;
    case 'graph':
      return <svg viewBox="0 0 24 24"><path d="M4 17 9 12l4 3 7-8"/><circle cx="4" cy="17" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="13" cy="15" r="1.5"/><circle cx="20" cy="7" r="1.5"/></svg>;
    case 'flow':
      return <svg viewBox="0 0 24 24"><path d="M12 4v16M6 8h12M6 16h12"/><circle cx="12" cy="4" r="2"/><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/></svg>;
    case 'doc':
      return <svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h6M10 16h6"/></svg>;
    case 'globe':
      return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>;
    case 'chat':
      return <svg viewBox="0 0 24 24"><path d="M4 6h16v10H8l-4 4z"/><path d="M8 10h8M8 13h5"/></svg>;
    case 'plane':
      return <svg viewBox="0 0 24 24"><path d="m3 11 18-7-7 18-3-8z"/><path d="m11 14 4-4"/></svg>;
    case 'cap':
      return <svg viewBox="0 0 24 24"><path d="m3 9 9-4 9 4-9 4z"/><path d="M7 11v5c3 2 7 2 10 0v-5"/></svg>;
    case 'rocket':
      return <svg viewBox="0 0 24 24"><path d="M12 14 9 21l-2-4-4-2 7-3"/><path d="M12 14c5-2 8-6 9-11-5 1-9 4-11 9z"/><circle cx="16" cy="8" r="1.7"/></svg>;
    case 'network':
      return <svg viewBox="0 0 24 24"><path d="M7 7h10M7 17h10M7 7l10 10M17 7 7 17"/><circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>;
    case 'building':
      return <svg viewBox="0 0 24 24"><path d="M4 20h16M6 18V9l6-4 6 4v9"/><path d="M9 18v-6M12 18v-6M15 18v-6"/></svg>;
    case 'check':
      return <svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></svg>;
    case 'lock':
      return <svg viewBox="0 0 24 24"><path d="M6 10h12v10H6z"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/></svg>;
    default:
      return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>;
  }
}

function Logo() {
  return (
    <a href="#hero" className="nv-logo" aria-label="NOVARCH home">
      <span className="nv-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40"><path d="M7 32V8l12 24V8l14 24V8"/><path d="M7 8l26 24"/></svg>
      </span>
      <span>NOVARCH</span>
    </a>
  );
}

function Header() {
  return (
    <header className="nv-header">
      <Logo />
      <nav className="nv-nav" aria-label="Main navigation">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="nv-header-cta" href={`mailto:${CONTACT_EMAIL}?subject=Conversation%20about%20NOVARCH`}>
        Request a conversation <span aria-hidden="true">-></span>
      </a>
    </header>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      <span>{children}</span>
    </div>
  );
}

function HeroFlow() {
  return (
    <div className="hero-flow" aria-hidden="true">
      <div className="source-list">
        {signalSources.map((source, index) => (
          <div className="source-row" key={source} style={{ '--i': index }}>
            <span>{source}</span>
            <i />
          </div>
        ))}
      </div>

      <svg className="flow-lines" viewBox="0 0 760 520" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="activePath" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="1" />
          </linearGradient>
        </defs>
        {[70, 150, 230, 310, 390].map((y, index) => (
          <path key={y} className="signal-path" d={`M70 ${y} C 180 ${y + 30 - index * 10}, 230 250, 340 260`} />
        ))}
        <path className="ghost-path" d="M340 260 C470 120 610 110 720 170" />
        <path className="ghost-path" d="M340 260 C470 360 610 390 730 335" />
        <path className="ghost-path" d="M380 260 C460 245 535 260 610 245" />
        <path className="hero-active-path" d="M340 260 C425 310 440 380 515 360 C580 340 570 215 645 190 C700 170 715 190 735 190" />
        {Array.from({ length: 30 }).map((_, index) => {
          const x = 180 + ((index * 67) % 520);
          const y = 70 + ((index * 43) % 370);
          return <circle key={index} className="ambient-node" cx={x} cy={y} r={(index % 3) + 2} />;
        })}
        <circle className="core-node" cx="340" cy="260" r="8" />
        <circle className="node-glow" cx="340" cy="260" r="36" />
        <circle className="node-glow small" cx="515" cy="360" r="34" />
        <circle className="node-glow small" cx="595" cy="265" r="34" />
        <circle className="node-glow small" cx="665" cy="185" r="36" />
      </svg>

      <div className="flow-stage understand">
        <span className="stage-icon"><Icon type="radar" /></span>
        <strong>Understand</strong>
        <small>AI interprets intent and context</small>
      </div>
      <div className="flow-stage prioritize">
        <span className="stage-icon"><Icon type="users" /></span>
        <strong>Prioritize</strong>
        <small>AI evaluates impact and urgency</small>
      </div>
      <div className="flow-stage intervene">
        <span className="stage-icon"><Icon type="check" /></span>
        <strong>Intervene</strong>
        <small>Right action, right time</small>
      </div>
      <div className="outcomes-label">
        <strong>Better outcomes</strong>
        <small>For students. For teams.</small>
      </div>
    </div>
  );
}

function ProblemJourney() {
  return (
    <div className="problem-journey">
      <div className="journey-line" />
      {problemSteps.map((step, index) => (
        <div className="problem-step" key={step.title} style={{ '--i': index }}>
          <div className="problem-icon"><Icon type={step.icon} /></div>
          {index < problemSteps.length - 1 && <span className="handoff-marker">x</span>}
          <strong>{step.title}</strong>
          <p><span />{step.note}</p>
        </div>
      ))}
      <div className="journey-legend" aria-label="Journey legend">
        <span><i className="legend-line solid" /> Happens in the moment</span>
        <span><i className="legend-line dotted" /> Context does not flow</span>
        <span><i className="legend-x">x</i> Missed handoff</span>
      </div>
    </div>
  );
}

function PlatformCore() {
  return (
    <div className="platform-core-wrap">
      <div className="platform-core" aria-hidden="true">
        <div className="core-ring ring-one" />
        <div className="core-ring ring-two" />
        <div className="core-ring ring-three" />
        <div className="core-logo">N</div>
      </div>
      {platformModules.map((module) => (
        <div className={`platform-module ${module.position}`} key={module.title}>
          <div className="module-icon"><Icon type={module.icon} /></div>
          <div>
            <span>{module.id}</span>
            <strong>{module.title}</strong>
            <p>{module.copy}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StudentJourneyMap() {
  return (
    <div className="student-map-panel">
      <span className="panel-kicker">Student journey map</span>
      <div className="student-map-line" />
      <div className="student-stages">
        {journeyStages.map((stage) => (
          <div className="student-stage" key={stage.title}>
            <div className="student-stage-icon"><Icon type={stage.icon} /></div>
            <strong>{stage.title}</strong>
            <p>{stage.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowActionPanel() {
  const actions = [
    ['Signal detected', 'AI monitors messages, forms, and interactions across channels.', 'radar'],
    ['Context summarized', 'The system pulls together key context, history, and intent.', 'doc'],
    ['Next action assigned', 'The right person is notified with a clear recommended action.', 'check'],
  ];

  return (
    <div className="workflow-panel">
      <span className="panel-kicker">AI workflow in action</span>
      <div className="workflow-stream" />
      <div className="workflow-actions">
        {actions.map(([title, copy, icon]) => (
          <div className="workflow-action" key={title}>
            <div className="workflow-icon"><Icon type={icon} /></div>
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PilotTiers() {
  return (
    <div className="pilot-tier-grid">
      {pilotTiers.map((tier) => (
        <div className={`pilot-tier ${tier.featured ? 'featured' : ''}`} key={tier.title}>
          {tier.featured && <span className="tier-badge">Most focused</span>}
          <div className="tier-icon"><Icon type={tier.icon} /></div>
          <h3>{tier.title}</h3>
          <p>{tier.copy}</p>
          <a href={`mailto:${CONTACT_EMAIL}?subject=NOVARCH%20${tier.title}%20conversation`}>Talk to us <span aria-hidden="true">-></span></a>
        </div>
      ))}
    </div>
  );
}

function TeamSection() {
  return (
    <section className="nv-section company-section" id="company">
      <div className="section-inner company-inner">
        <div className="company-copy">
          <SectionLabel>Company</SectionLabel>
          <h2>Building AI systems for the teams behind human success.</h2>
          <p>NOVARCH is being built by a small founding team focused on workflow intelligence, student-support operations, and long-term institutional impact.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="dummy-photo" aria-label={`${member.name} placeholder photo`}>
                <span>{member.initials}</span>
              </div>
              <div>
                <h3>{member.name}</h3>
                <strong>{member.role}</strong>
                <p>{member.focus}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="final-cta">
          <div>
            <span>Contact NOVARCH</span>
            <h3>Let us talk about your support workflow.</h3>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Conversation%20about%20NOVARCH`}>Request a conversation <span aria-hidden="true">-></span></a>
        </div>
        <footer className="nv-footer">
          <Logo />
          <span>2026 NOVARCH. AI workflow intelligence for support teams.</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </footer>
      </div>
    </section>
  );
}

function NovarchLanding() {
  return (
    <div className="novarch-v2">
      <Header />

      <main>
        <section className="nv-section hero-section" id="hero">
          <div className="section-inner hero-inner">
            <div className="hero-copy">
              <SectionLabel>AI workflow intelligence</SectionLabel>
              <h1>The AI operating layer for support workflows.</h1>
              <p>NOVARCH turns scattered signals, conversations, and touchpoints into coordinated next actions â€” starting with university student-support teams.</p>
              <div className="hero-actions">
                <a className="primary-btn" href="#platform">Explore Product <span aria-hidden="true">-></span></a>
                <a className="secondary-btn" href={`mailto:${CONTACT_EMAIL}?subject=Conversation%20about%20NOVARCH`}>Request Conversation</a>
              </div>
            </div>
            <HeroFlow />
            <a className="scroll-cue" href="#product" aria-label="Scroll to explore">
              <span>Scroll to explore</span>
              <i>v</i>
            </a>
          </div>
        </section>

        <section className="nv-section problem-section" id="product">
          <div className="section-inner problem-inner">
            <div className="section-copy max-copy">
              <SectionLabel>The problem</SectionLabel>
              <h2>Support breaks when context disappears.</h2>
              <p>Workshops happen. Emails are sent. Advising notes live somewhere else. Students move through the journey, but the system does not move with them.</p>
              <p className="muted-line">The result is missed follow-up, lost context, and reactive support.</p>
            </div>
            <ProblemJourney />
          </div>
        </section>

        <section className="nv-section platform-section" id="platform">
          <div className="section-inner platform-inner">
            <div className="section-copy max-copy">
              <SectionLabel>Platform</SectionLabel>
              <h2>Signals. Context. Action.</h2>
              <p>NOVARCH connects scattered touchpoints and turns them into coordinated next steps.</p>
            </div>
            <PlatformCore />
          </div>
        </section>

        <section className="nv-section solutions-section" id="solutions">
          <div className="section-inner solutions-inner">
            <div className="solutions-header">
              <div className="section-copy max-copy">
                <SectionLabel>Starting point</SectionLabel>
                <h2>Starting with student-success workflows.</h2>
                <p>Built for international student support, transition programs, advising follow-up, and study-to-work journeys.</p>
              </div>
              <div className="solution-labels">
                {solutionLabels.map(([lineOne, lineTwo, icon]) => (
                  <div className="solution-label" key={lineOne}>
                    <Icon type={icon} />
                    <span>{lineOne}{lineTwo && <><br />{lineTwo}</>}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="solutions-panels">
              <StudentJourneyMap />
              <WorkflowActionPanel />
            </div>
          </div>
        </section>

        <section className="nv-section pilot-section" id="pilot">
          <div className="section-inner pilot-inner">
            <div className="pilot-copy">
              <SectionLabel>Pilot NOVARCH</SectionLabel>
              <h2>Pilot NOVARCH with your support team.</h2>
              <p>Start with one workflow, prove value quickly, and expand from there.</p>
            </div>
            <PilotTiers />
            <div className="trust-strip">
              <span><Icon type="users" /> Human-in-the-loop AI</span>
              <span><Icon type="lock" /> Privacy-aware</span>
              <span><Icon type="building" /> Institution-ready</span>
              <span><Icon type="check" /> Built for real workflows</span>
            </div>
          </div>
        </section>

        <TeamSection />
      </main>
    </div>
  );
}

export default NovarchLanding;

