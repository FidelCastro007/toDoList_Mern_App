import React, { useContext } from 'react'
import dataContext from'./context/dataContext'

const SearchItem = () => {
  const {search, setSearch} = useContext(dataContext)
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
            type="text" 
            id="search" 
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchItem