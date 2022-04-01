import React from 'react';
import NavBar from '../navBar/NavBar';
import SearchBar from '../searchBar/SearchBar'
import './Header.scss'




function Header({search, setSearch}) {
    return (
      <header className="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="24" width="24" x="0" />
            <path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z" />
          </g>
        </svg>
        {/* <Logo /> */}
        <SearchBar search={search} setSearch={setSearch} />
        <NavBar  />
      </header>
    );
}

export default Header;