import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'Leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux'
import { icon } from 'leaflet'
import { setPath } from '../redux/slices/flightSlice'
import { useDispatch } from "react-redux"




const MapView = ({ setDetailId }) => {

  const { flights, path } = useSelector((store) => store.flight)
  const dispatch = useDispatch();

  const planeIcon = icon({
    iconUrl: 'plane-icon.png',
    iconSize: [30, 30]
  })

  return (
    <MapContainer center={[48.916383, 8.119980]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) =>
        <Marker key={flight.id} icon={planeIcon} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className='d-flex flex-column gap-2' >
              <span>Code: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)} className='w-100'>Details</button>

              {path.length > 0 &&
                <button onClick={() => dispatch(setPath([]))}>Clean Route</button>
              }


            </div>

          </Popup>
        </Marker>)}
      <Polyline positions={path} />

    </MapContainer>
  )
}

export default MapView