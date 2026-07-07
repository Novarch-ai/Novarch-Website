import React from 'react';
import './ProductContentEngine.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';
const TEARDOWN_SUBJECT = 'Product Content Engine teardown request';
const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(TEARDOWN_SUBJECT)}`;

const includedItems = [
  '15 short-form scripts',
  '5 finished vertical videos',
  'Captions and titles',
  'Simple 14-30 day content calendar',
  'One revision round',
];

const contentSources = [
  ['Product pages', 'Benefits, use cases, features, positioning'],
  ['Reviews', 'Proof, objections, customer language'],
  ['FAQs', 'Buyer questions turned into short videos'],
  ['Product photos', 'Visual assets for short-form formats'],
];

function ProductContentEngine() {
  return (
    <main className="pce-page">
      <header className="pce-header">
        <a className="pce-logo" href="/">NOVARCH</a>
        <nav>
          <a href="/">NOVARCH</a>
          <a href="#sprint">Starter Sprint</a>
          <a href={mailto}>Request teardown</a>
        </nav>
      </header>

      <section className="pce-hero">
        <div className="pce-kicker">Product Content Engine by NOVARCH</div>
        <h1>Turn product pages and reviews into 30 days of short-form content.</h1>
        <p>
          We help Shopify brands turn existing product pages, reviews, FAQs, and product photos into
          scripts, Reels, TikToks, Shorts, captions, and a simple content calendar.
        </p>
        <div className="pce-actions">
          <a className="pce-primary" href={mailto}>Request a free product page teardown</a>
          <a className="pce-secondary" href="#sprint">View Starter Sprint</a>
        </div>
        <div className="pce-trust">
          <span>Founder-led sprint</span>
          <span>Built from existing assets</span>
          <span>Workflow-first delivery</span>
        </div>
      </section>

      <section className="pce-section pce-grid">
        <div>
          <span className="pce-label">The opportunity</span>
          <h2>Your product pages already contain the content.</h2>
          <p>
            Most brands do not lack raw material. The material is already sitting inside product pages,
            customer reviews, FAQs, photos, and buyer objections. The gap is turning that material into
            a repeatable short-form content workflow.
          </p>
        </div>
        <div className="pce-card-list">
          {contentSources.map(([title, copy]) => (
            <article className="pce-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pce-section pce-process">
        <span className="pce-label">How it works</span>
        <h2>Product page in. Content workflow out.</h2>
        <div className="pce-flow">
          <span>Product page</span>
          <i />
          <span>Content angles</span>
          <i />
          <span>Scripts</span>
          <i />
          <span>Videos</span>
          <i />
          <span>Calendar</span>
        </div>
      </section>

      <section className="pce-section pce-sprint" id="sprint">
        <div>
          <span className="pce-label">Starter Sprint</span>
          <h2>Test one focused product batch.</h2>
          <p>
            The Starter Sprint is designed to test the workflow on one product or a small product category
            before committing to a larger content system.
          </p>
        </div>
        <aside className="pce-price-card">
          <div className="pce-price">$749</div>
          <p>50% upfront, 50% before final delivery.</p>
          <ul>
            {includedItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="pce-muted">Standard delivery: 5-7 business days after assets are received.</p>
          <a className="pce-primary full" href={mailto}>Request free teardown</a>
        </aside>
      </section>

      <section className="pce-section pce-teardown">
        <span className="pce-label">Start small</span>
        <h2>Begin with a free 3-minute product page teardown.</h2>
        <p>
          Before you commit to a sprint, we review one product page and show 3-5 short-form content
          opportunities from assets you already have.
        </p>
        <a className="pce-primary" href={mailto}>Request a free teardown</a>
      </section>

      <footer className="pce-footer">
        <div>
          <strong>NOVARCH</strong>
          <p>
            NOVARCH builds workflow systems that turn scattered information into structured execution.
            Product Content Engine is our ecommerce content sprint: product information in, short-form
            content workflow out.
          </p>
        </div>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </footer>
    </main>
  );
}

export default ProductContentEngine;
