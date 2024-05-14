import React from 'react';
import ReactSearchBox from 'react-search-box';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import ReactGlobe from './ReactGlobe';

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: "linear-gradient(orange, lightblue)" }}>
      <h1 className="welcome">Welcome!</h1>
      <ReactGlobe />
      <ReactSearchBox
        className="searchBox"
        placeholder="Where would you like to go?"
        value="Doe"
        callback={(record) => console.log(record)}
      />
      <h3><MyButton /></h3>
 
    </div>
  );
}

function MyButton() {
  return (
    <button className="searchButton">
      Search
    </button>
  );
}

export default App;
