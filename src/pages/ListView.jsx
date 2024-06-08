import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'




const ListView = ({ setDetailId }) => {

  const { flights } = useSelector((store => store.flight))
  //Pagination state
  const [itemOffset, setItemOffset] = useState(0);
  // Number of elements for each page
  const itemsPerPage = 10;
  //State of the last element to be used in the slice method
  const endOffset = itemOffset + itemsPerPage;
  //current page elements
  const currentItems = flights.slice(itemOffset, endOffset);
  //number of max page
  const pageCount = Math.ceil(flights.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flights.length;
    //update state
    setItemOffset(newOffset);
  };



  return (
    <div className='p-4'>
      <table className='table table-dark table-striped table-hover
     table-responsive mt-5'>
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Code</th>
            <th> latitude</th>
            <th>longitude</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{currentItems.slice(0, 10).map((flight) => <tr key={flight.id}>
          <td>{flight.id}</td>
          <td>{flight.code}</td>
          <td> {flight.lat}</td>
          <td>{flight.lng}</td>
          <td><button onClick={() => setDetailId(flight.id)}>detail</button></td>
        </tr>)}</tbody>
      </table>

        <ReactPaginate
          className='pagination justify-content-center my-5'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          nextLinkClassName='page-link'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link'
          activeClassName='active'
          breakClassName='page-link'
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
   

    </div>
  )
}

export default ListView