import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Building2, Database, FileText, Globe2, Layers3, LockKeyhole, ShoppingCart, Users, Workflow } from "lucide-react";
import "./NovaSite.css";
import "./NovaDeepPages.css";

function Shell({children}){
  return <div className="nv-site"><header className="nv-nav"><Link to="/" className="nv-brand"><span className="nv-mark">N</span><span>NOVARCH</span></Link><nav className="nv-links"><Link to="/systems">Systems</Link><Link to="/work">Work</Link><Link to="/manifesto">Ownership</Link><Link to="/company">Company</Link></nav><a className="nv-nav-cta" href="mailto:novarch-ai@gmail.com?subject=Workflow%20Review">Book a workflow review <ArrowRight size={15}/></a></header>{children}<footer className="nv-footer"><div className="nv-brand"><span className="nv-mark">N</span><span>NOVARCH</span></div><div><Link to="/systems">Systems</Link><Link to="/work">Work</Link><Link to="/company">Company</Link><Link to="/datenschutz">Privacy</Link></div><small>Ilmenau, Germany · International by design</small></footer></div>
}

const systemCards=[
  {icon:BriefcaseBusiness,title:"Revenue systems",copy:"Lead intake, qualification, follow-up, proposal and closing workflows where context otherwise leaks between people and tools."},
  {icon:Workflow,title:"Operations systems",copy:"Repeated operational work across inboxes, spreadsheets, portals and handoffs — redesigned as measurable workflows."},
  {icon:Users,title:"Guided journeys",copy:"Human-governed case and service journeys for situations where judgment, documentation and accountability matter."},
  {icon:LockKeyhole,title:"Private AI systems",copy:"A direction for systems where users retain meaningful control over data, context and continuity. Productization follows evidence."}
];

const workflowCards=[
  {icon:FileText,title:"Documents → decisions",copy:"Capture documents, extract context, route exceptions and preserve approval history."},
  {icon:ShoppingCart,title:"Order → fulfilment",copy:"Connect order state, inventory, exceptions, logistics and customer communication."},
  {icon:Database,title:"Request → system of record",copy:"Turn scattered requests into structured cases with ownership, context and next actions."},
  {icon:Building2,title:"Institutional case journeys",copy:"Design workflows around people, policy, privacy and the actual institutional operating environment."}
];

export function SystemsPage(){return <Shell><main className="nv-deep"><section className="nv-deep-hero"><span>Systems</span><h1>AI is useful.<br/>A working system is better.</h1><p>NOVARCH starts with the work itself: what enters, what context is needed, who decides, what action follows and how the outcome is measured.</p></section><section className="nv-deep-grid">{systemCards.map(({icon:Icon,title,copy},i)=><article key={title}><small>0{i+1}</small><Icon/><h2>{title}</h2><p>{copy}</p></article>)}</section><section className="nv-deep-band"><div><span>Architecture principle</span><h2>Request → context → decision → action → outcome.</h2></div><p>Automation is inserted where it removes expensive repetitive work. Human control remains where judgment, risk, trust or accountability requires it.</p></section><section className="nv-deep-section"><div className="nv-deep-intro"><span>Workflow library</span><h2>Specific doors into the same company.</h2></div><div className="nv-deep-list">{workflowCards.map(({icon:Icon,title,copy})=><article key={title}><Icon/><div><h3>{title}</h3><p>{copy}</p></div><ArrowRight/></article>)}</div></section><section className="nv-deep-cta"><Globe2/><h2>Have one ugly workflow?</h2><p>Good. Start there.</p><a href="mailto:novarch-ai@gmail.com?subject=Workflow%20Review">Book a workflow review <ArrowRight size={16}/></a></section></main></Shell>}

const workCards=[
  {tag:"Commercial systems",title:"Orbit Syndicate",url:"https://orbitsyndicate.com",copy:"International commerce operations across marketplaces, fulfilment, automation and customer delivery."},
  {tag:"Scale + operations",title:"The Retail Cube",url:"https://theretailcube.com",copy:"Digital commerce infrastructure, backend operations, campaigns and automation."},
  {tag:"Digital venture",title:"GlobeDigits",url:"https://globedigits.com",copy:"Part of the commercial operating trail that informs NOVARCH's systems approach."},
  {tag:"Founder product trail",title:"RaabtaDesk",url:"https://raabtadesk.com",copy:"A founder-built venture in the longer product and systems journey."}
];

export function WorkPage(){return <Shell><main className="nv-deep"><section className="nv-deep-hero"><span>Work</span><h1>The thesis came<br/>from operating.</h1><p>NOVARCH's present direction sits on top of commercial systems, founder-built products and institutional work — not just an AI positioning exercise.</p></section><section className="nv-work-proof-grid">{workCards.map((x,i)=><a key={x.title} href={x.url} target="_blank" rel="noreferrer"><small>{x.tag}</small><b>0{i+1}</b><h2>{x.title}</h2><p>{x.copy}</p><ArrowRight/></a>)}</section><section className="nv-deep-band nv-institutional"><div><span>Institutional track</span><h2>Germany is also part of the evidence base.</h2></div><p>Current and historical work includes university and institutional conversations around systems acquisition, privacy, data protection and commercialization pathways. Public detail is added only where status and attribution are clear.</p></section><section className="nv-deep-section"><div className="nv-deep-intro"><span>What this became</span><h2>Commerce → automation → workflows → intelligent systems.</h2></div><div className="nv-trail"><div><b>2018–19</b><p>Founder AI work begins through bachelor's FYP and technical experimentation.</p></div><div><b>Commercial operating years</b><p>Digital businesses, client delivery, commerce operations and automation systems.</p></div><div><b>Germany / institutional track</b><p>University, privacy, systems and commercialization workstreams.</p></div><div><b>NOVARCH</b><p>Consolidating the pattern into owned, human-governed intelligent systems.</p></div></div></section></main></Shell>}
