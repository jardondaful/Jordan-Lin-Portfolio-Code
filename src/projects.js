import React, { useState } from 'react';
import './projects.css';
import images from './images';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('CS');
  const [trailMatchIndex, setTrailMatchIndex] = useState(0);

  const csProjects = [
    {
      name: 'TrailMatch: Hiking Made Easy',
      description: 'TrailMatch combines the intelligent insights of ChatGPT with ArcGIS\'s dynamic mapping to present an unparalleled 3D hiking journey, complete with a sunshine rating and locations of essential amenities like gas and electric charging stations. This synergy ensures a tailored and hassle-free outdoor experience, enhancing every step with interactive guidance and practical information.',
      images: [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage],
    },
    {
      name: 'Bruin Bites',
      description: 'Bruin Bites is a website that allows UCLA students to more easily connect with their friends through food! Right off the bat, a new user can use the website to view what each restaurant/take-out option is serving, view their respective ratings, and even make them themselves.',
      image: images.BruinBitesImage,
    },
    // Add more CS projects as needed
  ];

  const gisProjects = [
    {
      name: 'Sage Hill National Park Drone Imagery Analysis',
      description: 'My Sage Hill National Park Drone Imagery project utilizes a DJI Mavic 3 drone equipped with an Altum sensor to map the park\'s landscape. The left image displays processed drone imagery, highlighting the flight path (orange) and capture points (yellow). The right image shows the raw imagery. Pink points on both represent manual data collection sites, essential for verifying the orthomosaic\'s radiometric accuracy from the drone\'s multispectral imaging.',
      image: images.DroneImagery,
    },
    {
      name: 'California Cities Weather Dashboard',
      description: 'This was made with ArcGIS Pro and ArcGIS Dashboards, showcasing California\'s highest temperatures during the month of August. The interactive map highlights statewide temperature patterns and identifies major cities\' hottest and coldest points, fusing application design and data analytics with the power of GIS.',
      image: images.DashboardImage,
    },
    // Add more GIS projects as needed
  ];

  const handleTrailMatchNavigation = (offset) => {
    setTrailMatchIndex((trailMatchIndex + offset + csProjects[0].images.length) % csProjects[0].images.length);
  };

  const displayedProjects = activeCategory === 'CS' ? csProjects : gisProjects;

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-category-buttons">
        <button onClick={() => setActiveCategory('CS')} className={activeCategory === 'CS' ? 'active' : ''}>
          Software Projects
        </button>
        <button onClick={() => setActiveCategory('GIS')} className={activeCategory === 'GIS' ? 'active' : ''}>
          GIS Projects
        </button>
      </div>
      <div className="project-group">
        {displayedProjects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <div className="project-image-container">
              {project.images ? (
                <>
                  <button className="arrow-button left-arrow" onClick={() => handleTrailMatchNavigation(-1)}>←</button>
                  <img src={project.images[trailMatchIndex]} alt={project.name + " project"} />
                  <button className="arrow-button right-arrow" onClick={() => handleTrailMatchNavigation(1)}>→</button>
                </>
              ) : (
                <img src={project.image} alt={project.name + " project"} />
              )}
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
