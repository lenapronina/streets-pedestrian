import React, { useState, useEffect, useRef } from "react";
import ReactMapGL from "react-map-gl";
import MapboxCompare from "mapbox-gl-compare";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-compare/dist/mapbox-gl-compare.css";
import { mpbToken, mapboxStreets, newStyle } from "../../cnsts";
import building1 from '../../img/builing-streets.png';
import building2 from '../../img/building-ped.png';
import threed2 from '../../img/3d-mockup.png';
import threed1 from '../../img/3d-streets.png';
import gate2 from '../../img/gate-mockup.png';
import gate1 from '../../img/gate-streets.png';
import velo2 from '../../img/velo-mockup.png';
import velo1 from '../../img/velo-streets.png';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

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

  useEffect(()=> {
    if(!viewport.zoom){
      setViewport(viewport)
    }
  }, [viewport])

 
  return (
    <section>
      <h2>recommendations</h2>
      <p>
        In general, the style well displays the basic elements needed for pedestrian navigation. There are several recommendations that can be changed in the style without significantly changing its structure.</p>
      <ul>
        <li>
          <h3>buildings</h3>
          <p>Now the colors of buildings, house numbers have a low contrast. Numbers of entrances and their icons are also lost in the background. It would be great to make the font sizes larger (it is possible to use a different font style) and more contrast</p>
          <div className="images">
            <figure>
              <img src={building1}
                className="image"
                alt="building Mapbox Streets"
              />
              <figcaption>building: Mapbox Streets</figcaption>
            </figure>
            <figure>
              <img src={building2}
                className="image"
                alt="building: mockup"
              />
              <figcaption>building: mockup</figcaption>
            </figure>
          </div>
        </li>
        <li>
          <h3>3D</h3>
          <p>Buildings can be a convenient landmark: the shape and height of the building can be easily navigated. Also, the use of 3d models seems to be a popular direction now, where one cannot lag behind competitors.</p>
          <div className="images">
            <figure>
              <img src={threed1}
                className="image"
                alt="3d Mapbox Streets"
              />
              <figcaption>3D: Mapbox Streets</figcaption>
            </figure>
            <figure>
              <img src={threed2}
                className="image"
                alt="3d: mockup"
              />
              <figcaption>3D: mockup</figcaption>
            </figure>
          </div>
        </li>
        <li>
          <h3>fences and gates</h3>
          <p>It would be great to add a dataset with fences. Lack of this data on the map can significantly degrade the user experience.</p>
          <div className="images">
            <figure>
              <img src={gate1}
                className="image"
                alt="fences Mapbox Streets"
              />
              <figcaption>fences: Mapbox Streets</figcaption>
            </figure>
            <figure>
              <img src={gate2}
                className="image"
                alt="fences: mockup"
              />
              <figcaption>fences: mockup</figcaption>
            </figure>
          </div>
        </li>
        <li>
          <h3>cycleways</h3>
          <p>
            A pedestrian can become a cyclist. But sometimes a pedestrian really does not want to share a common path with a cyclist (for example, a mother with a stroller), so it will be great to note the difference between these types.</p>
          <div className="images">
            <figure>
              <img src={velo1}
                className="image"
                alt="cycleways Mapbox Streets"
              />
              <figcaption>cycleways: Mapbox Streets</figcaption>
            </figure>
            <figure>
              <img src={velo2}
                className="image"
                alt="cycleways: mockup"
              />
              <figcaption>cycleways: mockup</figcaption>
            </figure>
          </div>
        </li>
      </ul>
      <h3>style comparison</h3>
      <div className='map-wrapper'>
        <div
          ref={refCont}
          id="comparison-container"
        >
          <a
            target="_blank"
            href={mapboxStreets}
            rel="noreferrer"
            className="map-label"
          >Mapbox streets</a>
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
          <a
            className="map-label"
            target="_blank"
            href={newStyle}
            rel="noreferrer"
          >Pedestrian mockup</a>
        </div>
      </div>
    </section>
    
  );
}
