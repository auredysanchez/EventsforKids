import React from "react";
import NavBar from "../navBar/NavBar";
// import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        {/* <SearchBar search={search} setSearch={setSearch} /> */}
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
