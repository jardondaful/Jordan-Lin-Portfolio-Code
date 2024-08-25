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
      <p style={{ marginTop: '30px', marginBottom: '20px' }}>Developer, IT Technician, GIS Analyst</p>
      <div className="connect-container">
        <a href="https://www.linkedin.com/in/jordanlin2003/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/jardondaful" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://drive.google.com/file/d/1mjjP9rm9TjybTxR0z5PiAm-2KRf99wUj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>

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