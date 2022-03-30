import {
    Marker,
    MapContainer,
    Popup,
    TileLayer,
  } from 'react-leaflet'
  
  const center = [-34.582372901203826, -58.436403660973866]

  
  const Mapa = function() {
    return (
      <MapContainer center={[-34.5593394216462 , -58.7077300207355]} zoom={14} id="mapa">
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.5593394216462 , -58.7077300207355]}>
          <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
    </Marker>
      </MapContainer>

    )
  }
  export default Mapa