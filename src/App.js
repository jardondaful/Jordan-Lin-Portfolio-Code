import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';
import images from './images';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import React Router components

import Home from './home'; // Import your Home component (Create this component)
import About from './about'; // Import your About component (Create this component)
import Projects from './projects'; // Import your Projects component (Create this component)
import Contact from './contact'; // Import your Contact component (Create this component)


function App() {
  const [trailMatchIndex, setTrailMatchIndex] = useState(0);
  const trailMatchImages = [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage];
  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    // Function to handle scrolling and apply scroll class
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollClass('scroll-down');
      } else {
        setScrollClass('');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTrailMatchNavigation = (offset) => {
    const newIndex = trailMatchIndex + offset;
    setTrailMatchIndex((newIndex + trailMatchImages.length) % trailMatchImages.length);
  };

  return (
    <div className={`App ${scrollClass}`}>
      {/* <Navbar /> */}
      <header className={`App-header section-fade ${scrollClass}`}>
        {/* Profile picture */}
        <img src={images.profile_picture} alt="Jordan Lin" className="profile-picture" />
        <h1>Jordan Lin</h1>
        <p style={{ marginTop: '30px' }}> Developer, IT Technician, GIS Analyst</p>
      </header>

      <section className={`about-section section-fade ${scrollClass}`}>
        <h2>About Me</h2>
        <p>
        Welcome to my space on the web!  I completed my B.S. in Computer Science and Engineering (CSE) with a minor in Geospatial Information Systems 
        and Technologies (GIS&T). Currently, I'm working at Esri as a developer in the IST department, where I'm harnessing my passion for programming 
        to revamp current company software. My technological journey is fueled by a commitment to elevate user experiences and revitalize legacy systems.
        </p>
      </section>

      <section className={`projects-section section-fade ${scrollClass}`}>
        <h2>Projects</h2>
        <div className="project-group">
          <div className="project">
            <h3>TrailMatch: Hiking Made Easy</h3>
            <div className="project-image-container">
              {/* Slideshow Controls */}
              <button className="arrow-button left-arrow" onClick={() => handleTrailMatchNavigation(-1)}>←</button>
              <img src={trailMatchImages[trailMatchIndex]} alt="TrailMatch Project" />
              <button className="arrow-button right-arrow" onClick={() => handleTrailMatchNavigation(1)}>→</button>
            </div>
            <p>TrailMatch harnesses the power of ChatGPT API to create an exhilarating hiking experience tailored just for you. I was responsible for the entire user interface of this project, and my team was able to secure 9th place in Esri's 8th Annual Hackathon!</p>
          </div>
          <div className="project">
            <h3>Sage Hill National Park Drone Imagery Analysis</h3>
            <div className="project-images-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <img src={images.DroneImagery} alt="Drone" style={{ width: '30%', height: '95%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
              <img src={images.Altum} alt="DashboardImage" style={{ width: '60%', height: '95%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
            </div>
            <p>My Sage Hill National Park Drone Imagery project utilizes a DJI Mavic 3 drone equipped with an Altum sensor to map the park's landscape. The left image displays processed drone imagery, highlighting the flight path (orange) and capture points (yellow). The right image shows the raw imagery. Pink points on both represent manual data collection sites, essential for verifying the orthomosaic's radiometric accuracy from the drone's multispectral imaging.</p>
          </div>
        </div>

        <div className="project-group">

          <div className="project">
            <h3>Bruin Bites</h3>
            <img src={images.BruinBitesImage} alt="BruinBites" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
            <p>Bruin Bites is a website that allows UCLA students to more easily connect with their friends through food! Right off the bat, 
              a new user can use the website to view what each restaurant/take-out option is serving, view their respective ratings, and even make them themselves.</p>
          </div>
          <div className="project">
            <h3>California Cities Weather Dashboard</h3>
            <img src={images.DashboardImage} alt="DashboardImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
            <p>This was made with ArcGIS Pro and ArcGIS Dashboards, showcasing California's highest temperatures during the month of August. The interactive map highlights statewide temperature patterns and identifies major cities' hottest and coldest points, fusing application design and data analytics with the power of GIS.</p>
          </div>
        </div>
      </section>

      <section className={`contact-section section-fade ${scrollClass}`}>
        <h2>Contact Me</h2>
        <p>If you're interested in collaborating or have any questions, feel free to get in touch!</p>
        <a href="mailto:jordanjlin2003@gmail.com">jordanjlin2003@gmail.com</a>
      </section>
    </div>
  );
}

export default App;
