import React from 'react';
import SearchBar from '../searchBar/SearchBar'

import './Header.scss'

function Header(props) {
    return (
      <header className="header">
        This is where logo will be
        {/* <Logo /> */}
        <SearchBar />
      </ header>
    );
}

export default Header;