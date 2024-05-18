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
/*
  const handleDestinationChange = ({suggestion}) => {
    console.log('Destination retrieved: ', suggestion);
    setDestinationSearch(suggestion.place.name);
  };

  const handleHomeChange = ({suggestion}) => {
    console.log('Home retrieved: ', suggestion);
    setHomeSearch(suggestion.place.name);
  };


  const handleSearch = () => {
    console.log('Searching for: ', destinationSearch, homeSearch);
    if(destinationSearch) {
      //fetch(`https://api.mapbox.com/search/geocode/v6/forward?q={search_text}`)
      fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${destinationSearch}&access_token=${MAPBOX_TOKEN}`)
      .then(response => response.json())
      .then(data => console.log(data));
    }
  };
*/
  return (
    <div className="App" style={{ backgroundImage: "linear-gradient(orange, lightblue)" }}>
      <h1 className="welcome">Welcome!</h1>
      <ReactGlobe/>
      <AddressAutofill accessToken={MAPBOX_TOKEN}>
        <input
          className="destinationBox"
          placeholder="Where would you like to go?"
          //value = {destinationSearch}
          //onChange = {handleDestinationChange}
          autoComplete="address-level1"
        />
        </AddressAutofill>
        <br/>
        <AddressAutofill accessToken={MAPBOX_TOKEN}>
          <input
            className="homeBox"
            placeholder="Where are you from?"
          //  value={homeSearch}
          //  onChange = {handleHomeChange}
            autoComplete="address-level1"
            />
          </AddressAutofill>
      <h3> <button> Search </button></h3>
    </div>
  );
}

// renders new map that once user presses "Search"
const Map = () => {
  return (
    <div className='map'></div>
  );
}

export default App;
