import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    match: "",
    tickets: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎟️ Thank you ${formData.name}! Your booking for ${formData.match} (${formData.tickets} tickets) is confirmed.`);
    setFormData({ name: "", email: "", phone: "", match: "", tickets: 1 });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#0d47a1" }}>🎟️ Buy IPL Tickets</h1>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <select
          name="match"
          value={formData.match}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Match</option>
          <option value="CSK vs MI">CSK vs MI</option>
          <option value="RCB vs KKR">RCB vs KKR</option>
          <option value="SRH vs DC">SRH vs DC</option>
          <option value="RR vs GT">RR vs GT</option>
          <option value="PBKS vs LSG">PBKS vs LSG</option>
        </select>

        <input
          type="number"
          name="tickets"
          min="1"
          max="10"
          value={formData.tickets}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={{
          background: "#0d47a1",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Book Tickets
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};
