import { Marker, MapContainer, Popup, TileLayer } from "react-leaflet";
const Mapa = function ({ coordenadas, cliente }) {
  return !coordenadas[0] ? (
    <>Coordenadas NULL</>
  ) : (
    <MapContainer center={coordenadas} zoom={14} id="mapa">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordenadas}>
        <Popup>
          {cliente.name} <br /> {cliente.sucursal}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Mapa;
