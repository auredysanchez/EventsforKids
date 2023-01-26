import React from "react";
// import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <header>

      <a href="/">
        <img src="/familyGroup.png" className="logo" alt="logo" />
      </a>
      {/* <img src="/familyGroup.png" className="logo" alt="logo" /> */}
    </header>
  );
};

export default Logo;
