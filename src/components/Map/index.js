import React, { useState, useEffect, useRef } from "react";
import ReactMapGL from "react-map-gl";
import MapboxCompare from "mapbox-gl-compare";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-compare/dist/mapbox-gl-compare.css";
import { mpbToken } from "../../cnsts";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = mpbToken;

export default function App() {
  const refCont = useRef(null)
  const [viewport, setViewport] = useState({
    latitude: 48.858056,
    longitude: 2.348248,
    zoom: 18.29
  });
  
  const style = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
  };

  useEffect(() => {
    
    const beforeMap = new mapboxgl.Map({
      container: "before", // Container ID
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [48.858056, 2.348248],
      zoom: 18.29
    });
    const afterMap = new mapboxgl.Map({
      container: "after", // Container ID
      style: 'mapbox://styles/lenaemaya/clig4j2fk003r01qp28863oq9',
      center: [48.858056, 2.348248],
      zoom: 18.29
    });
    const map = new MapboxCompare(beforeMap, afterMap, "#comparison-container");

    return () => map.remove();
  }, []);

 
  return (
    <div className='map-wrapper'>
      <div
        ref={refCont}
        id="comparison-container"
      >
        <p className="map-label">Mapbox streets</p>
        <ReactMapGL
          id="before"
          {...viewport}
          onMove={(evt) => setViewport(evt.viewState)}
          style={style}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={mpbToken}
        />

        <ReactMapGL
          id="after"
          {...viewport}
          onMove={(evt) => setViewport(evt.viewState)}
          style={style}
          mapStyle="mapbox://styles/lenaemaya/clig4j2fk003r01qp28863oq9"
          mapboxAccessToken={mpbToken}
        />
        <p className="map-label">Pedestrian mockup</p>
      </div>
    </div>
  );
}
