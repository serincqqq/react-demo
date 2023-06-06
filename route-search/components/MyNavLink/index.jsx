import React from "react";
import { NavLink, Route } from "react-router-dom";
function MyNavLink(props) {
  return <NavLink className="list-group-item" {...props}></NavLink>;
}
export default MyNavLink;
