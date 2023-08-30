import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Flag(){
    const userLocation =[23.8104,7.9992]

    return(
    <MapContainer center={userLocation} zoom={13} style={{ height: '400px', width: '100%' }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
 
  <Marker position={userLocation}>
    <Popup>Location</Popup>
  </Marker>
</MapContainer>

    );

};
export default Flag;

