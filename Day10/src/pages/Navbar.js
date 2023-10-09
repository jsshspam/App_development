import '../assets/css/Navbar.css';
import { ShoppingCart } from "phosphor-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export const Bar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        NinjaCart
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>  <Link to="/cart">
          <ShoppingCart size={32} />
        </Link></li>
        <li>  <Link to="/login">Logout
        </Link></li>
      </ul>
    </nav>
  );
};


// import React from 'react';
// import { Link } from 'react-router-dom';
// export const Bar = () => {
//   return (
//     <nav>
//       <ul class="menu-bar">
//         <li> <Link to="/Home"> Home </Link></li>
//         <li> <Link to="/Dashboard"> Dashboard </Link></li>
//         <li> <Link to="/shop"> Shop </Link></li>
//       </ul>
//     </nav>
//   );
// }


