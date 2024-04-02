import React, { useState, useEffect } from 'react';
import './App.css';
import images from './images';

// Assuming Home, About, Projects, and Contact are sections/components within your single page
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollClass('scroll-down');
      } else {
        setScrollClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`App ${scrollClass}`}>
      <header className={`App-header section-fade ${scrollClass}`}>
        <img src={images.profile_picture} alt="Jordan Lin" className="profile-picture" />
        <h1>Jordan Lin</h1>
        <p style={{ marginTop: '30px' }}>Developer, IT Technician, GIS Analyst</p>
      </header>

      {/* Directly embedding sections/components for a single continuous page */}
      {/* <Home /> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
