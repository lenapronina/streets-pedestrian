import React from 'react';
import './Header.css';

const Header = ({label})=> {
  return (
    <a className="header" href="https://api.mapbox.com/styles/v1/lenaemaya/clig4j2fk003r01qp28863oq9.html?title=view&access_token=pk.eyJ1IjoibGVuYWVtYXlhIiwiYSI6ImNpa3VhbXE5ZjAwMXB3eG00ajVyc2J6ZTIifQ.kmZ4yVcNrupl4H8EonM3aQ&zoomwheel=true&fresh=true#17.7/51.511471/-0.119531/327.2/46">
      <div className="block"></div>
      <div className="block"></div>
      {/* <h1 className="header_heading">{label}</h1> */}
    </a>
    
  )
};

export { Header };