import React from "react";

export const Navbar = (props) => {
  return (
    <nav className="navbar-app">
      <div className="navbar-nav">
        <h1 className="nav-title">Untitled Game</h1>
        <ul className="navbar-buttons">
          <NavItem icon="?" url={window.location.href} />
          <NavItem icon="$" url={window.location.href}/>
          <NavItem icon="save" url={window.location.href}/>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href={props.url} target="blank" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
};

export default Navbar;
