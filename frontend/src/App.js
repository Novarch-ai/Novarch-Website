import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NovarchLanding from "./components/NovarchLanding";
import "./lib/siteMetrics";

const BUSINESS = {
  designation: "NOVARCH",
  owner: "Massum Abbas",
  street: "Wiesenweg 21",
  city: "98693 Ilmenau",
  country: "Deutschland",
  email: "novarch-ai@gmail.com",
};

function AddressBlock() {
  return (
    <address>
      <strong>{BUSINESS.designation} — {BUSINESS.owner}</strong><br />
      Inhaber: {BUSINESS.owner}<br />
      {BUSINESS.street}<br />
      {BUSINESS.city}<br />
      {BUSINESS.country}
    </address>
  );
}

function LegalLayout({ title, children }) {
  return (
    <main className="legal-page">
      <Link className="legal-back" to="/"><img src="/novarch-mark.svg" alt="" /> <span>NOVARCH</span><em>← Zurück</em></Link>
      <article className="legal-card">
        <p className="legal-eyebrow">NOVARCH — Massum Abbas</p>
        <h1>{title}</h1>
        {children}
      </article>
    </main>
  );
}

function ImprintPage() {
  return (
    <LegalLayout title="Impressum">
      <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>
      <AddressBlock />
      <h2>Kontakt</h2>
      <p>E-Mail: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
      <h2>Haftung für Inhalte und Links</h2>
      <p>
        Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für die Inhalte externer
        Websites, auf die wir verlinken, sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p className="legal-updated">Stand: 20. Juli 2026</p>
    </LegalLayout>
  );
}

function PrivacyPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim
        Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet werden.
      </p>
      <h2>1. Verantwortlicher</h2>
      <AddressBlock />
      <p>E-Mail: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>

      <h2>2. Hosting und Server-Protokolle</h2>
      <p>
        Diese Website wird über GitHub Pages bereitgestellt. Beim Abruf der Website kann
        GitHub technisch erforderliche Verbindungsdaten verarbeiten, insbesondere IP-Adresse,
        Zeitpunkt des Abrufs, angeforderte Datei sowie Browser- und Geräteinformationen.
        Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung dieser Website
        und erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f
        DSGVO. Anbieter ist GitHub, Inc., 88 Colin P Kelly Jr Street, San Francisco,
        CA 94107, USA. Weitere Informationen finden Sie in der{" "}
        <a
          href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noreferrer"
        >
          Datenschutzerklärung von GitHub
        </a>.
      </p>

      <h2>3. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail oder Instagram kontaktieren, verarbeiten wir Ihre Angaben,
        um Ihre Anfrage zu beantworten. Soweit es um die Anbahnung oder Durchführung eines
        Vertrags geht, ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage; im Übrigen
        Art. 6 Abs. 1 lit. f DSGVO. Wir löschen die Daten, sobald sie für den jeweiligen
        Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        bestehen.
      </p>

      <h2>4. Analyse, Cookies und externe Links</h2>
      <p>
        NOVARCH setzt auf dieser Website derzeit keine eigenen Analyse- oder Trackingdienste
        und keine nicht technisch erforderlichen Cookies ein. Links zu Instagram,
        E-Mail-Diensten oder anderen externen Angeboten übertragen Daten erst, wenn Sie den
        jeweiligen Link aufrufen. Für die anschließende Verarbeitung gelten die
        Datenschutzhinweise des jeweiligen Anbieters.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben nach Maßgabe der DSGVO insbesondere das Recht auf Auskunft, Berichtigung,
        Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
        Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>

      <h2>6. Beschwerderecht</h2>
      <p>
        Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Für Thüringen:
        Thüringer Landesbeauftragter für den Datenschutz und die Informationsfreiheit,
        Häßlerstraße 8, 99096 Erfurt,{" "}
        <a href="mailto:poststelle@datenschutz.thueringen.de">
          poststelle@datenschutz.thueringen.de
        </a>.
      </p>

      <h2>7. Aktualisierung</h2>
      <p>
        Wir aktualisieren diese Erklärung, wenn sich eingesetzte Dienste oder rechtliche
        Anforderungen ändern.
      </p>
      <p className="legal-updated">Stand: 20. Juli 2026</p>
    </LegalLayout>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NovarchLanding initialLanguage="de" />} />
          <Route path="/en" element={<NovarchLanding initialLanguage="en" />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
