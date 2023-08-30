import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';

const Locataion = () => {
  const [userLocation, setUserLocation] = useState([0, 0]);

  useEffect(() => {
    
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setUserLocation([latitude, longitude]);
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.error("browser can't recieve your Locataion");
      }
    
  }, []);

  return (
    
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  );
};

export default Locataion;



