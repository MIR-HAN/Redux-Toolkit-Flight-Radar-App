import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { detailOptions } from '../constants/index'
import formatDate from '../utils/formateDate'
import Loader from './Loader'
import { setPath } from '../redux/slices/flightSlice';
import { useDispatch } from 'react-redux';
import C from "../utils/checkValid"



const Modal = ({ detailId, close }) => {
    const dispatch = useDispatch();

    const [d, setDetail] = useState(null);

    // whenever id changes get the flight details
    useEffect(() => {
        //reset preview flight state to enable loader works for each request
        setDetail(null)

        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
            detailOptions)
            .then((res) => {
            setDetail(res.data);
            dispatch(setPath(res.data.trail));
        } )

    }, [detailId])

    return (

        <div className='detail-outer'>
            <div className='detail-inner'>
                <div className='close-wrapper'>
                    <button onClick={close}>X</button>
                </div>
                {!d ? (<Loader />) : (
                    <>
                        <h2>{C(d.aircraft.model.text)}</h2>
                        <h2>{C(d.aircraft.model.code)}</h2>

                        <p>
                            <span>Tail Code: </span>
                            <span>{C(d.aircraft.registration)}</span>
                        </p>

                        <img src={d?.aircraft?.images?.large?.[0]?.src ? d.aircraft.images.large[0].src : "unknown"} alt="" />

                        <p>
                            <span>Company: </span>
                            <span>{d?.airline?.short ? d.airline.short : "unknown"}</span>
                        </p>

                        <p>
                            <span>Departure: </span>
                            <a href={C(d.airport.origin?.website)} target="blank" >{C(d.airport.origin?.name)}</a>
                        </p>

                        <p>
                            <span>Arrival: </span>
                            <a href={C(d.airport.destination?.website)} target="blank" >{C(d.airport.destination?.name)}</a>
                        </p>

                        <p>
                            <span>Departure Time: </span>
                            <span>{formatDate(d.time.scheduled.departure)}</span>
                        </p>
                        <p>
                            <span>Arrival Time: </span>
                            <span>{formatDate(d.time.scheduled.arrival )}</span>
                        </p>

                        <p className={d.status.icon}>
                            <span>Estimated -</span>
                            <span>{formatDate(d.time.estimated.arrival)}</span>
                        </p>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Modal;