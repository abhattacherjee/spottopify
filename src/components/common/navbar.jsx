import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTokenValue } from "../../store/token";

export const renderNavLink = (item, user) => {
  return (
    <NavLink key={item.path} className="nav-item nav-link m-2" to={item.path}>
      {item.content ? item.content(user.name) : item.label}
    </NavLink>
  );
};
const Navbar = ({ header, items }) => {
  const userToken = useSelector(getTokenValue);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to={header.path}>
        {header.label}
      </Link>
      <div className="collapse navbar-collapse" id="vidlyNav">
        <ul className="navbar-nav">
          {items.map(item => {
            if (!userToken && item.show === "unauthenticated")
              return renderNavLink(item, userToken);
            if (userToken && item.show === "authenticated")
              return renderNavLink(item, userToken);
            if (item.show === "always") return renderNavLink(item, userToken);
            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
