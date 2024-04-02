import React, { useState } from 'react';
import './projects.css';
import images from './images';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('CS');
  const [trailMatchIndex, setTrailMatchIndex] = useState(0);

  const csProjects = [
    {
      name: 'TrailMatch: Hiking Made Easy',
      description: 'An innovative app that matches hikers to trails based on skill level and scenic preferences.',
      images: [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage],
    },
    {
      name: 'Bruin Bites',
      description: 'A platform for UCLA students to explore and rate dining options around campus.',
      image: images.BruinBitesImage,
    },
    // Add more CS projects as needed
  ];

  const gisProjects = [
    {
      name: 'Sage Hill National Park Drone Imagery Analysis',
      description: 'Utilizing drone technology to map and analyze the topography of Sage Hill National Park.',
      image: images.DroneImagery,
    },
    {
      name: 'California Cities Weather Dashboard',
      description: 'Interactive dashboard displaying weather patterns and data across California cities.',
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
