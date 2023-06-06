import React from 'react';
import { Header } from './components/Header';
import {Intro} from './components/Intro';
import Map from './components/Map';
import './App.css';


export default function App() {
  return (
    <div className='App'>
      <Header label={'Rethinking the navigation map: Pedestrian map'}/>
      <Intro />
      <Map/>
    </div>
  );
}