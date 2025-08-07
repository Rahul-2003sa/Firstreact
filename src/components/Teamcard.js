import React from "react";

export default function Teamcard({ name, logo, captain }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "200px",
      textAlign: "center",
      background: "#f8f8f8"
    }}>
      <img src={logo} alt={name} style={{ width: "100px", height: "100px" }} />
      <h3>{name}</h3>
      <p><strong>Captain:</strong> {captain}</p>
    </div>
  );
}
