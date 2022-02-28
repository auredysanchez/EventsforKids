import React from "react";
import "./SearchBar.scss";

function SearchBar({search, setSearch}) {
  
  console.log(search)
  

    return (
    <div className="searchBar">
      <input 
      className="searchBar__input" 
      placeholder="search" 
      type="text" 
      value={search}
      onChange={(event)  => setSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
