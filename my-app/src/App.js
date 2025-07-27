import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stories from './components/Stories/Stories';
import Electronic from './pages/Electronic/Electronic';
import Fashion from './pages/Fashoin/Fashion';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';
import About from './pages/About/About';
import TechInfo from './pages/TechInfo/TechInfo';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/techinfo" element={<TechInfo />} />
       <Route path="/story/:id" element={<Stories />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      </Router>
  );
}

export default App;
