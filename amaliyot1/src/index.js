import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 'Router' o'rniga 'Route'
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route uchun to'g'ri nom va import */}
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
