// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import './font.css';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();

  // Update activeTab based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveTab('home');
        setShowFooter(false);
        break;
      case '/projects':
        setActiveTab('projects');
        setShowFooter(true);
        break;
      case '/about':
        setActiveTab('about');
        setShowFooter(true);
        break;
      default:
        setActiveTab('home');
    }
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: activeTab === 'projects' ? '#000' : '#EBF5F4', minHeight: '100vh' }}>
      <Header activeTab={activeTab} />
      <Routes>
        <Route
          path="/"
          element={<Home setShowFooter={setShowFooter} setActiveTab={setActiveTab} />}
        />
        <Route
          path="/projects"
          element={<Projects setActiveTab={setActiveTab} />}
        />
        <Route
          path="/about"
          element={<About setActiveTab={setActiveTab} />}
        />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
