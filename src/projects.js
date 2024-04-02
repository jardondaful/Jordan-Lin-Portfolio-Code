import React, { useState } from 'react';
import images from './images';

function Projects() {
  const [trailMatchIndex, setTrailMatchIndex] = useState(0);
  const trailMatchImages = [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage];

  const handleTrailMatchNavigation = (offset) => {
    const newIndex = trailMatchIndex + offset;
    setTrailMatchIndex((newIndex + trailMatchImages.length) % trailMatchImages.length);
  };

  return (
    <section className="projects-section section-fade">
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
          <p>
            TrailMatch harnesses the power of ChatGPT API to create an exhilarating hiking experience tailored just for you. I was responsible for the entire user interface of this project, and my team was able to secure 9th place in Esri's 8th Annual Hackathon!
          </p>
        </div>

        <div className="project">
          <h3>Bruin Bites</h3>
          <img src={images.BruinBitesImage} alt="BruinBites" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
          <p>
            Bruin Bites is a website that allows UCLA students to more easily connect with their friends through food! Right off the bat, a new user can use the website to view what each restaurant/take-out option is serving, view their respective ratings, and even make them themselves.
          </p>
        </div>
      </div>

      <div className="project-group">
        <div className="project">
          <h3>California Cities Weather Dashboard</h3>
          <img src={images.DashboardImage} alt="DashboardImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
          <p>
            This was made with ArcGIS Pro and ArcGIS Dashboards, showcasing California's highest temperatures during the month of August. The interactive map highlights statewide temperature patterns and identifies major cities' hottest and coldest points, fusing application design and data analytics with the power of GIS.
          </p>
        </div>

        <div className="project">
          <h3>LA Cell Towers Explorer</h3>
          <img src={images.CellTowersImage} alt="CellImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
          <p>
            This was made with ArcGIS Pro and ArcGIS Web AppBuilder, showcasing all the cell towers within an inputted radius of an inputted address that's within LA.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
