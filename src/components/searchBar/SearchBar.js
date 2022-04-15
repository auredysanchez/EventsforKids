import React from "react";
import "./SearchBar.scss";

const SearchBar = ({search, setSearch}) => {
  
  console.log(search)
  

    return (
      <div className="searchBar">
        <form action="">
          <input
            className="searchBar__input"
            placeholder="Search"
            name="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
    );
}

export default SearchBar;
