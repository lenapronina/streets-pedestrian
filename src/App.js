import React from 'react';
import { Header } from './components/Header';
import {Intro} from './components/Intro';
import Map from './components/Map';
import { BaseSection } from './components/Section';
import './App.css';


export default function App() {
  return (
    <div className='App'>
      <Header label={'Rethinking the navigation map: Pedestrian map'}/>
      <BaseSection h2={'differencies'}>
        <p>
          The main difference between pedestrian navigation and others is that at any time a pedestrian can use carsharing and become a driver, take a bus or take the subway, rent a bike, or go for a walk in the park.
          A pedestrian may need information about one-way traffic, because he will choose where to call a taxi.
        </p>
        <ul>
          some other differencies:
          <li>I. A wide variety of scenarios: from hiking in the mountains to finding a bar on a Friday night.</li>
          <li>II. A large degree of freedom: a pedestrian can walk on the left and right side of the street, he is not tied to roads, he constantly changes the route that the algorithm suggests, because he makes decisions based on the situation. Therefore, navigation for him is not an instruction, but just additional information.</li>
          <li>III. Greater attention to accessibility: pedestrian crossings, stairs and other infrastructure that is important to consider when navigating on foot.</li>
        </ul>
      </BaseSection>
      <BaseSection h2="navigation features">
        <p>For pedestrians, almost all the main elements of the map are important, because their path includes many stages from planning to the route itself.</p>
        <p>1. When planning a long-distance trip, it is important to show the main elements of the urban structure: road network, transport, district labels, green areas and hydrographic objects.</p>
        <p>2. POI landmarks are required on medium and large scales. They help the user navigate faster than street names and house numbers.</p>
        <p>3. Of course, special attention should be paid to pedestrian crossings, stairs, pedestrian zones and paths. This is a specific part that is suitable only for pedestrians, which means it should be easily distinguishable, contrasting and understandable.</p>
        <p>4. Buildings, entrances, numbers: their correct identification simplifies the search, reduces the time of using the map, when the navigation is essentially completed.</p>
      </BaseSection>
      <BaseSection h2="map interaction">
        <p>If we single out two main stages in the navigation scenario, we can see that they often differ in the device used: a computer/tablet and a phone.</p>
        <p>On the computer, the user is looking for some information, can build a route, choose a more convenient one, and plan a trip. Most likely he will remember the main points of the route. To roughly generalize, there are no serious restrictions either in time or in design.</p>
        <p>The most important interaction happens with the use of the phone. Along the route, the user will search for the main points, transfers, build a route between them, specify the details that are needed at a particular moment of navigation.
          Here, the speed of work, the performance of the map is especially important. Here are some important restrictions:</p>
        <ol>
          <li>the screen of the phone is small, so it is important to adjust the density of information so that the map is not empty</li>
          <li>it is important to monitor the contrast of the map: in snow and heat, the map should be comfortable to use without the maximum screen brightness setting</li>
          <li>clickable elements should be of a convenient size so that you can easily interact with the interface</li>
        </ol>
      </BaseSection>
      <BaseSection h2='main scenario'>
        <p>
          The main user scenario, which includes the concept of search / route building / navigation, can be divided into several stages.
        </p>
        <h4>I. Before starting / searching / building a route</h4>
        <p>The user at home (in the office / cafe, etc.) will look at the map, find the right place, build a route, compare possible routes.</p>
        <h4>II. During navigation</h4>
        <p>If the user is traveling by metro / train, then when approaching the place, he will look at the right exit, which side of the road to get off etc.</p>
        <h4>III. During navigation</h4>
        <p>The user can build a route to a point in the application (and follow it), or they can simply mentally recreate it in their head and follow only the end point and direction.</p>
        <h4>IV. After navigation</h4>
        <p>Having reached the address, the user can search for the nearest cafe, see the route to the bus stop, check the right entrance.</p>
      </BaseSection>
      <BaseSection h2='the elements of the map design work well'>
        <h4>I. Before starting / searching / building a route</h4>
        <p>The structure of the city is perfectly shown: the hierarchy of the road network is visible, green areas and labels of districts are shown. Even in an unfamiliar city, a clear structure can be traced, which speeds up orientation and search on a small scale.</p>
        <p>The presence of color zones of hospitals, clusters of points of interest, industrial zones well distinguishes different areas of the city.</p>
        <h4>II. During navigation</h4>
        <p>All specialized objects for pedestrian navigation: crossings, steps, separate paths, zones are marked and well read.</p>
        <p>Colored icons for poi are a great solution that allows a pedestrian to quickly distinguish a category by color and search or locate landmarks for that category.</p>
      </BaseSection>
      <BaseSection h2='the elements of the map design don’t work as well as they could'>
        <h4>I. Before starting / searching / building a route</h4>
        <p>POI prioritization does not always work well, there are objects that are shown before others, but do not really help in navigation.
          For tourists, this may be important. Google (and other competitors) are solving this problem by using superPOI, which not only help in orientation, but can also be used as a guide for tourists.</p>
        <h4>II. During navigation</h4>
        <p>Intersections of colored polygons (universities, hospitals, green areas) that are very close in brightness confuse them. Perhaps they should be turned off on large scales.</p>
        <p>Buildings and house numbers look very low-contrast, the entrances to the buildings are almost invisible, and the icon can be confused with a regular marker.
From the point of view of user experience, there can be big problems when finding the right object.</p>
      </BaseSection>
      <Map/>
    </div>
  );
}