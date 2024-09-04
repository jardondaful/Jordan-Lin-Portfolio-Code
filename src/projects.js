import React, { useState } from 'react';
import './projects.css';
import images from './images';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('CS');
  const [projectIndexes, setProjectIndexes] = useState({});

  const csProjects = [
    {
      name: 'TrailMatch: Hiking Made Easy',
      description: 'TrailMatch combines ChatGPT API with ArcGIS Online products and React to present the user\'s ideal hiking trail! Each generated trail is complete with 3D visualizations of the trails, locations of essential amenities like gas and electric charging stations, and even sunshine ratings.',
      images: [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage],
    },
    {
      name: 'HaggleHaul',
      description: 'HaggleHaul is a web application designed to democratize ridesharing by allowing users to directly negotiate ride fares with their drivers. Riders can preschedule a trip they need to take, and potential drivers can bid with each other on their lowest offers to take the fares.',
      images: [images.HaggleHaul],
    },
    {
      name: "UCLA's DMA Printlab Interface",
      description: 'This interface provides real-time monitoring of any amount of machines in a server by utilizing React for a dynamic frontend and SQL for data management, alongside Ansible and YAML for data retrieval. Developed for UCLA\'s DMA Printlab, this tool offered insights into printer availability, maintenance needs, and usage statistics, enabling staff to swiftly address issues, optimize resource allocation, and enhance overall operational efficiency.',
      images: [images.StatusInterface],
      className: 'dma-printlab' // Add this specific class
    },
    {
      name: "Spotify Listening Analytics and Recommendation Dashboard",
      description: 'This Flask-based data analytics application integrates with the Spotify API to deliver personalized insights into the user\'s listening habits. Upon logging into their Spotify account, the user can explore visualizations of their top artists, tracks, and listening trends. The app features custom playlist generation based on the user\'s listening history and preferences. To enhance performance, the application utilizes multithreading for efficient data processing.',
      images: [images.YourTopTenArtists, images.YourListeningTrends, images.YourTopTracks, images.RecommendedTracks, images.YourCustomPlaylist, images.YourListeningPatterns],
    },
    {
      name: 'Bruin Bus Stop Locator',
      description: "The Bruin Bus Stop Locator is a Python-scripted toolbox built in ArcGIS Pro designed to give UCLA students recommendations on which buses to take based on current user-inputted data. As output, it generates directions on which bus stops and routes to take and provides visual layouts of these directions.",
      images: [images.bruin_bus_stop_locator_final_route_output,
        images.bruin_bus_stop_locator_terminal,
        images.bruin_bus_stop_locator_closest_facility_1,
        images.bruin_bus_stop_locator_closest_facility_2,
      ],
    },
    {
      name: 'Bruin Bites',
      description: 'Bruin Bites is a website that allows UCLA students to more easily connect with their friends through food! Right off the bat, a new user can use the website to view what each restaurant/take-out option is serving, view and make their respective ratings, and even track their and their friends\'s dining history.',
      images: [images.BruinBitesImage]
    },
    {
      name: 'TeraScope: Dynamic Earth Observation Explorer',
      description: 'GeoExplorer: Dynamic Earth Observation Explorer leverages Google Earth Engine\'s JavaScript API to enable interactive exploration of NAIP imagery across California. It allows for exploration of any subregion in the world at any year within the 21st century. The application incorporates advanced GIS techniques, including spatial interpolation and raster calculations, and integrates FAO GAUL data for accurate mapping of administrative divisions.',
      images: [images.geoexplorer_base, images.geoexplorer_2],
    },
    {
      name: 'California Cities Weather Dashboard',
      description: 'This was made with ArcGIS Pro and ArcGIS Dashboards, showcasing California\'s highest temperatures during the month of August. The interactive map highlights statewide temperature patterns and identifies major cities\' hottest and coldest points, fusing application design and data analytics with the power of GIS.',
      images: [images.DashboardImage],
    },
    {
      name: 'Mapping Vernal Swale Italian Thistle Invasion',
      description: 'This project focuses on mapping and predicting the spread of the invasive Italian Thistle within the Vernal Swale at Sedgwick Reserve. Utilizing a DJI Mavic 3 M drone, high-resolution imagery was captured to assist with the mapping process. Additionally, an RTK receiver linked to ArcGIS Field Maps facilitated precise data collection on the current distribution of the Italian Thistle. The final data analysis was then performed using GRASS GIS.',
      images: [images.vernal_swale],
    },
    {
      name: 'Sage Hill National Park Drone Imagery Analysis',
      description: 'Sage Hill National Park Drone Imagery Analysis captures the detailed topography and vegetation patterns using a DJI Mavic 3 drone equipped with an Altum sensor. The displayed image showcases the processed drone imagery, overlaid with the drone\'s flight path (orange lines) and capture points (yellow markers). The pink points indicate areas where manual ground truthing was conducted, which are critical for validating the orthomosaic\'s radiometric precision from the drone\'s multispectral imaging.',
      images: [images.DroneImagery],
    },
  ];

  const gisProjects = [
    // Add GIS projects here if needed
  ];

  const chunkedProjects = (projects) => {
    const chunked = [];
    for (let i = 0; i < projects.length; i += 2) {
      chunked.push(projects.slice(i, i + 2));
    }
    return chunked;
  };

  const handleNavigation = (projectName, offset, length) => {
    setProjectIndexes(prevIndexes => {
      const currentIndex = (prevIndexes[projectName] || 0) + offset;
      const newIndex = (currentIndex + length) % length; // Ensure positive modulo
      return { ...prevIndexes, [projectName]: newIndex };
    });
  };
  
  const getCurrentIndex = projectName => {
    return projectIndexes[projectName] || 0;
  };

  const displayedProjects = activeCategory === 'CS' ? csProjects : gisProjects;
  const chunkedDisplayProjects = chunkedProjects(displayedProjects);

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      {chunkedDisplayProjects.map((projectRow, rowIndex) => (
        <div className="project-row" key={rowIndex}>
          {projectRow.map((project, projectIndex) => (
            <div className="project" key={projectIndex}>
              <h3>{project.name}</h3>
              <div className="project-image-container">
                {project.images && project.images.length > 1 ? (
                  <>
                    <button 
                      className="arrow-button left-arrow" 
                      onClick={() => handleNavigation(project.name, -1, project.images.length)}
                    >
                      ←
                    </button>
                    <div
                      className="project-images"
                      style={{
                        transform: `translateX(-${getCurrentIndex(project.name) * 100}%)`,
                        transition: 'transform 0.5s ease-out'
                      }}
                    >
                      {project.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${project.name} image ${imgIndex + 1}`}
                          className="project-image"
                        />
                      ))}
                    </div>
                    <button 
                      className="arrow-button right-arrow" 
                      onClick={() => handleNavigation(project.name, 1, project.images.length)}
                    >
                      →
                    </button>
                  </>
                ) : (
                  <img 
                    src={project.images[0]}
                    alt={`${project.name} image`} 
                    className="project-image"
                  />
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