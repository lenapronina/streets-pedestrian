import React from "react";
import img1 from '../../img/full-shot-man-wheelchair-outdoors.jpg';
import img2 from '../../img/woman-with-trendy-manicure-using-gps-search-right-way.jpg';
import img3 from '../../img/tokyo-people-traveling-street.jpg';

const Intro = () => {
  return(
    <div className="hehes">
      <img src={img1} className="hehe" alt="Man in wheelcahir"/>
      <img src={img2} className="hehe" alt="googleMaps"/>
      <img src={img3} className="hehe" />
    </div>
  )
};

export { Intro };