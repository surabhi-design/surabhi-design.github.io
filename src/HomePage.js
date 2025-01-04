import React, { useRef, useEffect } from 'react';
import MainBanner from './MainBanner';
import Projects from './Projects';
import About from './About';

const HomePage = () => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  const handleScroll = () => {
    const homeBottom = homeRef.current.getBoundingClientRect().bottom;
    const projectTop = projectRef.current.getBoundingClientRect().top;

    // Trigger scroll to projects when scrolling past home section
    if (window.scrollY > homeBottom) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Trigger scroll to about when scrolling past projects section
    if (window.scrollY > projectTop) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div ref={homeRef}>
        <MainBanner />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
};

export default HomePage;
