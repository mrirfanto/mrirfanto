import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <h1 className="header__brand">mrirfanto</h1>
        </Link>
        <nav className="header__nav">
          <ul>
            <Link to="/about">
              <li>about</li>
            </Link>
            <Link to="/contact">
              <li>contact</li>
            </Link>
            <li>projects</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
