import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NovarchLanding from "./components/NovarchLanding";

function LegalPage({ type }) {
  const isPrivacy = type === "privacy";

  return (
    <main className="legal-page">
      <Link className="legal-back" to="/">Zurück zu NOVARCH</Link>
      <section className="legal-card">
        <p className="legal-eyebrow">NOVARCH</p>
        <h1>{isPrivacy ? "Datenschutzerklärung" : "Impressum"}</h1>
        <p>
          Diese Seite ist als Platzhalter angelegt, damit die Website keine toten Links enthält.
          Der finale rechtliche Text muss vor der aktiven Ansprache von Geschäftskunden ergänzt werden.
        </p>
        <p>
          Kontakt aktuell: <a href="mailto:novarch-ai@gmail.com">novarch-ai@gmail.com</a>
        </p>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NovarchLanding initialLanguage="de" />} />
          <Route path="/en" element={<NovarchLanding initialLanguage="en" />} />
          <Route path="/impressum" element={<LegalPage type="imprint" />} />
          <Route path="/datenschutz" element={<LegalPage type="privacy" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
