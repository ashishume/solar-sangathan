import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <button
        className="navbar-hamburger"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b22222"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className={`navbar-links${open ? " show" : ""}`}>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/shop" onClick={() => setOpen(false)}>
          Shop
        </Link>
        <Link to="/blog" onClick={() => setOpen(false)}>
          Blog
        </Link>
        <Link to="/training" onClick={() => setOpen(false)}>
          Training
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact Us
        </Link>
        <Link to="/join" onClick={() => setOpen(false)}>
          <button className="navbar-join-btn">Join as member</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
