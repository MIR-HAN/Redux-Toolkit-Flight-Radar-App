import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
 const {isLoading, isError, flights} = useSelector((store)=>store.flight)

  return (
    <header>
        <div>
            <img src="/plane-logo.png" alt="" />
            <h3>Flight Radar</h3>
        </div>

        <p>
          {isLoading ? 
          'Flights counting...' :
           isError ? 'Error accured': 
           flights.length + ' Flights Found'}
        </p>
    </header>
  )
}

export default Header