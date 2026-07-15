import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovarchLanding from "./components/NovarchLanding";
import ChatPage from "./pages/ChatPage";
import ProductContentEngine from "./components/ProductContentEngine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NovarchLanding initialLanguage="de" />} />
          <Route path="/en" element={<NovarchLanding initialLanguage="en" />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/product-content-engine" element={<ProductContentEngine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
