import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MapView from './pages/MapView'
import ListView from './pages/ListView'
import { useDispatch } from 'react-redux'
import { getFlights } from './actions'
import Modal from './components/Modal'


const App = () => {
  //is it Mapviw ot Listview
  const [isMapView, setIsMapView] = useState(true);
  //details state
  const [detailId, setDetailId] = useState(null);
  
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getFlights());

  }, [])

  return (
    <div>
      <Header />

      <div className='view-buttons'>
        <button className={isMapView ? 'active' : ''} onClick={() => setIsMapView(true)} >Map view</button>
        <button className={isMapView ? '' : 'active'} onClick={() => setIsMapView(false)}>List view</button>
      </div>

      {isMapView ? <MapView setDetailId={setDetailId} /> :
       <ListView setDetailId={setDetailId} />}

      {detailId && <Modal detailId={detailId} close={()=>setDetailId(null)}/>}

    </div>
  )
}

export default App