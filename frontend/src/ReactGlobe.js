// ReactGlobe.js
import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const ReactGlobe = () => {
  const globeEl = useRef();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 1.8;

    // Example data points
    const pointsData = [
      {
        lat: 1.3521,
        lng: 103.8198,
        size: 0.1,
        color: 'red',
        label: 'Singapore'
      }
    ];

    setPoints(pointsData);

    console.log("Points Data:", pointsData); // Debug points data
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={400}
      height={400}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl={"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      pointsData={points}
      pointColor={({ color }) => color || 'white'}  // Ensure default color
      pointAltitude={({ size }) => size || 0.1}  // Ensure default size
      pointLabel={({ label }) => `<b>${label}</b>`}
    />
  );
};

export default ReactGlobe;
