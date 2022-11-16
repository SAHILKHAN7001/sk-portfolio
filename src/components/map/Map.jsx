import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[23.01828, 72.63609]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[23.01828, 72.63609]}>
        <Popup>Tadaa ! Here's where i live.</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Sahil Khan</h3>
        <span>A.k.A Badshah Khan</span>
        <br />
        <span>Location : Ahmedabad,Gujarat,India</span>
        <br />
        <span>Email: sahilkhan117001@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
