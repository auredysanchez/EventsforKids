import React from "react";
import NavBar from "../navBar/NavBar";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
import "./Header.scss";

const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
      <Logo />
      <SearchBar search={search} setSearch={setSearch} />
      <NavBar />
    </header>
  );
};

export default Header;
