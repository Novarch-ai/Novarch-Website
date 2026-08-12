import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Globe2, Layers3, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import "./NovaSite.css";

const proof = [
  { label: "Commercial systems", value: "Orbit · GlobeDigits · Retail Cube" },
  { label: "Institutional track", value: "Ilmenau · university & privacy workstreams" },
  { label: "Founder AI trail", value: "Since 2018–19" },
];

const pathways = [
  { icon: Building2, title: "For businesses", copy: "Turn fragmented requests, documents and handoffs into guided operational systems." },
  { icon: Users, title: "For institutions", copy: "Design case journeys where context, privacy and human decisions stay visible." },
  { icon: Sparkles, title: "For products", copy: "Join launches and experiments as reusable NOVARCH systems become products." },
];

const workflows = [
  "Enquiry → qualification → quote",
  "Customer onboarding",
  "Order processing & exceptions",
  "Support → resolution",
  "Documents → decisions",
  "Institutional case journeys",
];

export default function NovaHome() {
  return (
    <div className="nv-site">
      <header className="nv-nav">
        <Link to="/" className="nv-brand"><span className="nv-mark">N</span><span>NOVARCH</span></Link>
        <nav className="nv-links">
          <a href="#systems">Systems</a><a href="#work">Work</a><a href="#ownership">Ownership</a><Link to="/company">Company</Link>
        </nav>
        <a className="nv-nav-cta" href="mailto:novarch-ai@gmail.com?subject=Workflow%20Review">Book a workflow review <ArrowRight size={15}/></a>
      </header>

      <main>
        <section className="nv-hero">
          <div className="nv-eyebrow">Applied AI · workflows · owned systems</div>
          <h1>Build systems that<br/><em>work for you.</em></h1>
          <p className="nv-lead">NOVARCH turns fragmented work across people, documents, inboxes and software into intelligent workflows with clear context, human control and accountable execution.</p>
          <div className="nv-actions">
            <a className="nv-btn nv-btn-primary" href="mailto:novarch-ai@gmail.com?subject=Workflow%20Review">Book a workflow review <ArrowRight size={17}/></a>
            <a className="nv-btn nv-btn-ghost" href="#work">Explore our work</a>
          </div>
          <div className="nv-hero-panel">
            <div className="nv-flow-line"><span>Request</span><b>→</b><span>Context</span><b>→</b><span>Decision</span><b>→</b><span>Action</span><b>→</b><span>Outcome</span></div>
            <div className="nv-flow-meta"><ShieldCheck size={17}/> Human-governed where judgment matters · AI where it earns its place.</div>
          </div>
        </section>

        <section className="nv-proof-strip">
          {proof.map((item) => <div key={item.label}><small>{item.label}</small><strong>{item.value}</strong></div>)}
        </section>

        <section id="systems" className="nv-section nv-dark-block">
          <div className="nv-section-head"><span>01 / Systems</span><h2>One company.<br/>Multiple doors.</h2><p>The commercial entry can stay narrow while the NOVARCH system expands across businesses, institutions and products.</p></div>
          <div className="nv-card-grid">
            {pathways.map(({icon: Icon, title, copy}) => <article className="nv-card" key={title}><Icon/><h3>{title}</h3><p>{copy}</p><span>Explore <ArrowRight size={14}/></span></article>)}
          </div>
        </section>

        <section className="nv-section nv-workflows">
          <div className="nv-section-head"><span>02 / Workflow library</span><h2>Start with expensive work.</h2><p>We look for repeated work that crosses people and tools, gets delayed, loses context or depends on memory.</p></div>
          <div className="nv-workflow-grid">{workflows.map((w,i)=><div className="nv-workflow" key={w}><span>0{i+1}</span><strong>{w}</strong><Workflow size={18}/></div>)}</div>
        </section>

        <section id="work" className="nv-section nv-work">
          <div className="nv-section-head"><span>03 / Work</span><h2>Built through operating,<br/>not theorizing.</h2><p>NOVARCH's current systems thesis grows from commercial ventures, international delivery and institutional work.</p></div>
          <div className="nv-venture-grid">
            <a className="nv-venture nv-orbit" href="https://orbitsyndicate.com" target="_blank" rel="noreferrer"><small>Commerce systems</small><h3>Orbit Syndicate</h3><p>Multi-marketplace operations, automation, fulfilment and customer delivery.</p><ArrowRight/></a>
            <a className="nv-venture nv-retail" href="https://theretailcube.com" target="_blank" rel="noreferrer"><small>Scale + operations</small><h3>The Retail Cube</h3><p>E-commerce infrastructure, campaigns, backend operations and automation.</p><ArrowRight/></a>
            <a className="nv-venture nv-globe" href="https://globedigits.com" target="_blank" rel="noreferrer"><small>Digital venture</small><h3>GlobeDigits</h3><p>Part of the commercial trail that informs NOVARCH today.</p><ArrowRight/></a>
            <a className="nv-venture nv-raabta" href="https://raabtadesk.com" target="_blank" rel="noreferrer"><small>Founder product trail</small><h3>RaabtaDesk</h3><p>A founder-built venture in the broader product and systems journey.</p><ArrowRight/></a>
          </div>
        </section>

        <section id="ownership" className="nv-section nv-manifesto">
          <div className="nv-manifesto-copy"><span>04 / Ownership</span><h2>Your data.<br/>Your systems.<br/><em>Your intelligence.</em></h2></div>
          <div className="nv-manifesto-text"><p>Human potential is universal. Opportunity is not.</p><p>We believe intelligent systems should increase human agency — not quietly create another dependency. That means meaningful control over data, workflows, access and continuity.</p><Link to="/manifesto">Read the NOVARCH manifesto <ArrowRight size={15}/></Link></div>
        </section>

        <section className="nv-section nv-model">
          <div className="nv-section-head"><span>05 / Work with us</span><h2>From evidence to a working system.</h2></div>
          <div className="nv-steps"><div><b>01</b><h3>Workflow Review</h3><p>Map the process, leakage, ownership boundaries and measurable outcome.</p></div><div><b>02</b><h3>Deployment</h3><p>Build a bounded system around the actual people, tools and decisions.</p></div><div><b>03</b><h3>Improve</h3><p>Measure, refine and turn reusable parts into repeatable infrastructure.</p></div></div>
        </section>

        <section className="nv-final">
          <Globe2 size={34}/><h2>Germany is our base.<br/>The market is global.</h2><p>Built from Ilmenau, working across commercial and institutional environments.</p><a className="nv-btn nv-btn-primary" href="mailto:novarch-ai@gmail.com?subject=Workflow%20Review">Start with one workflow <ArrowRight size={17}/></a>
        </section>
      </main>

      <footer className="nv-footer"><div className="nv-brand"><span className="nv-mark">N</span><span>NOVARCH</span></div><div><Link to="/company">Company</Link><Link to="/manifesto">Manifesto</Link><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Privacy</Link></div><small>Ilmenau, Germany · International by design</small></footer>
    </div>
  );
}

export function CompanyPage(){return <SimplePage kicker="Company" title="A systems company built from real operating work." body="NOVARCH brings together a founder AI journey beginning in 2018–19, international commercial ventures, institutional work in Germany and a current focus on applied-AI workflows." blocks={["Commercial systems — Orbit Syndicate, GlobeDigits and The Retail Cube.","Institutional track — university, systems, privacy and data-protection workstreams.","Product trail — founder-built ventures including RaabtaDesk.","Today — workflow reviews, bounded deployments and managed improvement."]}/>}
export function ManifestoPage(){return <SimplePage kicker="Manifesto" title="Technology should create ownership, not dependency." body="Human potential is universal. Opportunity is not. NOVARCH exists to build intelligent systems that increase human agency." blocks={["People and organizations should retain meaningful control over their data and operating systems.","Human judgment belongs inside the system, not outside it as an afterthought.","AI is a tool in the architecture — not the architecture itself.","The systems we build should become more understandable, portable and useful over time."]}/>}
function SimplePage({kicker,title,body,blocks}){return <div className="nv-site"><header className="nv-nav"><Link to="/" className="nv-brand"><span className="nv-mark">N</span><span>NOVARCH</span></Link><Link className="nv-nav-cta" to="/">Back home</Link></header><main className="nv-simple"><span>{kicker}</span><h1>{title}</h1><p>{body}</p><div>{blocks.map(x=><article key={x}><Layers3/><p>{x}</p></article>)}</div></main><footer className="nv-footer"><div className="nv-brand"><span className="nv-mark">N</span><span>NOVARCH</span></div><div><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Privacy</Link></div></footer></div>}
