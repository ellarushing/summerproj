import React from 'react';
import ReactSearchBox from 'react-search-box';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import ReactGlobe from './ReactGlobe';
import MapGL from 'react-map-gl';
import {useState} from 'react';

const App = () => {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxsYXJ1c2hpbmciLCJhIjoiY2x3Nnk3dXg5MjA0eDJrcXVsaHM3dHlpeiJ9.ncqhXz4GSoEfFMgQlBw6Ow';
  const [destinationSearch, setDestinationSearch] = useState('');
  const [homeSearch, setHomeSearch] = useState('');

  const handleDestinationChange = value => {
    setDestinationSearch(value);
  };

  const handleHomeChange = value => {
    setHomeSearch(value);
  };

  const handleSearch = () => {
    console.log('Searching for: ', destinationSearch, homeSearch);
  };

  return (
    <div className="App" style={{ backgroundImage: "linear-gradient(orange, lightblue)" }}>
      <h1 className="welcome">Welcome!</h1>
      <ReactGlobe/>
      <ReactSearchBox
        className="destinationBox"
        placeholder="Where would you like to go?"
        value={destinationSearch}
        onChange = {record => handleDestinationChange(record.value)}
      />
      <br/>
      <ReactSearchBox
        className="homeBox"
        placeholder="Where are you from?"
        value={homeSearch}
        onChange = {record => handleHomeChange(record.value)}
        />
      <h3> <button onClick={handleSearch}> Search </button></h3>
    </div>
  );
}

export default App;
