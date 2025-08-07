// src/components/Navbar.js
import React from "react";
import { FaSearch } from "react-icons/fa";
import iplLogo from "../assets/ipl-logo.png"; // Make sure this file exists

export default function Navbar() {
  return (
    <nav style={{
      background: "#0d47a1",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
      justifyContent: "space-between"
    }}>
      
      {/* Left Section - Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={iplLogo} alt="IPL Logo" style={{ width: "50px", height: "50px" }} />
        <h2 style={{ margin: 0 }}>IPL 2025</h2>
      </div>

      {/* Middle Section - Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/teams" style={linkStyle}>Teams</a>
        <a href="/table" style={linkStyle}>Table</a>
        <a href="/stats" style={linkStyle}>Stats</a>
        <a href="/contact" style={linkStyle}>Contact Us</a>
      </div>

      {/* Right Section - Search Bar */}
      <div style={{ display: "flex", alignItems: "center", background: "white", borderRadius: "20px", padding: "5px 10px" }}>
        <FaSearch style={{ color: "#0d47a1" }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            border: "none",
            outline: "none",
            marginLeft: "5px",
            padding: "5px",
            borderRadius: "20px"
          }}
        />
      </div>
    </nav>
  );
}

// Link styling
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px"
};
