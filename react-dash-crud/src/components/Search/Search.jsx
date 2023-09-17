import React from 'react'
import './search.scss'

const Search = () => {
  return (
    <div className='search'>

    <div className="searchText">
      <h2>ClaimZippy Integrated DMS</h2>
    </div>

   
        <div className="middel">
        <div className='searchByContainer'>
            <span className='searchText'>Search By:</span>
            <select className="select">
                <option value="deepak">Deepak</option>
                <option value="arun">Arun</option>
                <option value="manti">Manti</option>
                <option value="Suraj">Suraj</option>
                <option value="anshika">Anshika</option>
            </select>
        </div>

         <div className='searchinputWrap'>
         <input  
           type="text" 
           placeholder="Search by name" />
          <img src="/icons/search.svg" alt="search" />
              
        </div> 
        </div>
    

      <div className='funnel'>
         <img src="/icons/funnel.svg" alt="funnel" />
       </div>
 
    </div>
  )
}

export default Search