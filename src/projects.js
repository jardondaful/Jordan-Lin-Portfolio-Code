import React, { useState } from 'react';
import './projects.css';
import images from './images';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('CS');
  const [projectIndexes, setProjectIndexes] = useState({});
  

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
    {
      name: 'Bruin Bus Stop Locator',
      description: 'The Bus Stop Locator for Bruins is a Python-scripted toolbox built in ArcGIS Pro. The purpose of this project is to help locate bus stops within a desired proximity and provide recommendations on which buses to take based on current user inputted data. As output, it generates directions on which bus stops and routes to take in terminal and generates visual layouts of such directions.',
      images: [
        images.bruin_bus_stop_final_route_output,
        images.bruin_bus_stop_locator_terminal,
        images.bruin_bus_stop_locator_closest_facility_1,
        images.bruin_bus_stop_locator_closest_facility_2
      ],
    },
    // Add more GIS projects as needed
  ];

   // Function to chunk the project array into sub-arrays of length 2
   const chunkedProjects = (projects) => {
    const chunked = [];
    for (let i = 0; i < projects.length; i += 2) {
      chunked.push(projects.slice(i, i + 2));
    }
    return chunked;
  };

  const handleNavigation = (projectName, offset) => {
    setProjectIndexes((prevIndexes) => ({
      ...prevIndexes,
      [projectName]: (prevIndexes[projectName] || 0) + offset,
    }));
  };

  // Function to get the current index for a project
  const getCurrentIndex = (projectName) => {
    return projectIndexes[projectName] || 0;
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
      {chunkedProjects(displayedProjects).map((projectRow, rowIndex) => (
        <div className="project-row" key={rowIndex}>
          {projectRow.map((project, projIndex) => (
            <div className="project" key={projIndex}>
              <h3>{project.name}</h3>
              <div className="project-image-container">
                {project.images && project.images.length > 1 ? (
                  <>
                    <button className="arrow-button left-arrow" onClick={() => handleNavigation(project.name, -1)} disabled={getCurrentIndex(project.name) === 0}>←</button>
                    <img src={project.images[getCurrentIndex(project.name)]} alt={`${project.name} image`} />
                    <button className="arrow-button right-arrow" onClick={() => handleNavigation(project.name, 1)} disabled={getCurrentIndex(project.name) === project.images.length - 1}>→</button>
                  </>
                ) : (
                  <img src={project.image || (project.images && project.images[0])} alt={`${project.name} image`} />
                )}
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Projects;
