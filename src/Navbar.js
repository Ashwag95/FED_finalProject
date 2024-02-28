import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="head">
      <header>
        <img src="logo.svg" alt="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#weekSpecial">Menu</a>
          </li>
          <li>
            <Link to="Booking">Reservations</Link>
          </li>
          <li>
            <a href="#">Order online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
