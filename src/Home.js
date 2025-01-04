// Home.js
import React, { useEffect, useRef } from 'react';
import MainBanner from './MainBanner';
import Projects from './Projects';
import About from './About';

const Home = ({ setShowFooter, setActiveTab }) => {
  const mainBannerRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const projectsTop = projectsRef.current.getBoundingClientRect().top;
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (aboutTop < viewportHeight / 2) {
        setActiveTab('about');
        setShowFooter(true);
        console.log("Tab open:", 'about');
      } else if (projectsTop < viewportHeight / 2) {
        setActiveTab('projects');
        setShowFooter(false);
        console.log("Tab open:", 'projects');
      } else {
        setActiveTab('home');
        setShowFooter(false);
        console.log("Tab open:", 'home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveTab, setShowFooter]);

  return (
    <div>
      <div ref={mainBannerRef} id="main">
        <MainBanner />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
