import React from 'react';
import {newStyle} from '../../cnsts';
import './Header.css';

const Header = ({label})=> {
  return (
    <div className="header" href="https://api.mapbox.com/styles/v1/lenaemaya/clig4j2fk003r01qp28863oq9.html?title=view&access_token=pk.eyJ1IjoibGVuYWVtYXlhIiwiYSI6ImNpa3VhbXE5ZjAwMXB3eG00ajVyc2J6ZTIifQ.kmZ4yVcNrupl4H8EonM3aQ&zoomwheel=true&fresh=true#17.7/51.511471/-0.119531/327.2/46">
      {/* <Intro></Intro> */}
      <h1 className="mainHeading">{label}</h1>
      
      <p className="pHeader">Finding the right house and entrance in an unfamiliar area seems to be one of the most common scenarios for any user, whether he came by car or on foot.</p>
      <p className="pHeader">Search — route building – navigation itself is the basic algorithm of any navigation scenario. But pedestrian navigation has some differences.</p>
      <a
        className="link"
        target="_blank"
        href={newStyle}
        rel="noreferrer"
      >link to mockup</a>
    </div>
    
  )
};

export { Header };