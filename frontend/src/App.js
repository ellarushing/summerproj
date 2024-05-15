import React from 'react';
import ReactSearchBox from 'react-search-box';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import ReactGlobe from './ReactGlobe';
import MapGL from 'react-map-gl';
import {useState, useRef} from 'react';
import {AddressAutofill} from '@mapbox/search-js-react';


const App = () => {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxsYXJ1c2hpbmciLCJhIjoiY2x3Nnk3dXg5MjA0eDJrcXVsaHM3dHlpeiJ9.ncqhXz4GSoEfFMgQlBw6Ow';
  const [destinationSearch, setDestinationSearch] = useState('');
  const [homeSearch, setHomeSearch] = useState('');

  const handleDestinationChange = event => {
    setDestinationSearch(event.target.value);
  };

  const handleHomeChange = event => {
    setHomeSearch(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for: ', destinationSearch, homeSearch);
    if(destinationSearch) {
      fetch(`https://api.mapbox.com/search/geocode/v6/forward?q={search_text}`)
    }
  };

  return (
    <div className="App" style={{ backgroundImage: "linear-gradient(orange, lightblue)" }}>
      <h1 className="welcome">Welcome!</h1>
      <ReactGlobe/>
      <AddressAutofill accessToken={MAPBOX_TOKEN}>
        <input
          className="destinationBox"
          placeholder="Where would you like to go?"

        />
        </AddressAutofill>
        <br/>
        <AddressAutofill accessToken={MAPBOX_TOKEN}>
          <input
            className="homeBox"
            placeholder="Where are you from?"
         //   value={homeSearch}
         //   onChange = {handleHomeChange}
            />
          </AddressAutofill>


      <h3> <button> Search </button></h3>
    </div>
  );
}

export default App;
