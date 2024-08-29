import React from 'react'
import './SearchBar.css'
function SearchBar({size}) {
  return (
    <div className={`search-bar ${size} `}>
      <input type="text" placeholder='Search Here....'></input>
      <button>Search</button>
    </div>
  )
}

export default SearchBar