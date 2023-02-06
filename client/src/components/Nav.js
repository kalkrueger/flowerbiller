import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div>
      <h1>Stem Suite</h1>
      <nav>
        <ul id="nav_bar">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/standing_orders">Standing Orders</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/shipments">Shipments</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
