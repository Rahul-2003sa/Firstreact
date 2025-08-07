import React from "react";
import iplLogo from "../assets/final.webp"; // Make sure this file exists

export default function Home() {
  const news = [
    "CSK and MI clash in season opener!",
    "Shubman Gill named captain of Gujarat Titans.",
    "Ruturaj Gaikwad to lead CSK in IPL 2025.",
    "Hardik Pandya returns to Mumbai Indians.",
    "Virat Kohli says RCB ready for the challenge."
  ];

  const matches = [
    { date: "2025-03-23", match: "CSK vs MI", venue: "Chennai" },
    { date: "2025-03-24", match: "RCB vs KKR", venue: "Bengaluru" },
    { date: "2025-03-25", match: "SRH vs DC", venue: "Hyderabad" },
    { date: "2025-03-26", match: "RR vs GT", venue: "Jaipur" },
    { date: "2025-03-27", match: "PBKS vs LSG", venue: "Mohali" }
  ];

  const players = [
    { name: "Virat Kohli", team: "RCB", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virat_Kohli_portrait.jpg" },
    { name: "Ruturaj Gaikwad", team: "CSK", img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Ruturaj_Gaikwad.jpg" },
    { name: "Shubman Gill", team: "GT", img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Shubman_Gill.jpg" }
  ];

  return (
    <div>
      {/* Full Background Hero Section */}
      <div   style={{
          position: "relative",
          backgroundImage: `url(${iplLogo})`, // ✅ Use backticks and ${} to inject variable
          backgroundSize: "cover",
          width: "100%",
          height: "550px",
          color: "white",
         
         margin:0
        }}
      >
       
        
      </div>

      {/* Latest News */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#0d47a1" }}>📰 Latest News</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px"
        }}>
          {news.map((item, index) => (
            <div key={index} style={{
              background: "#f8f9fa",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Matches */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#0d47a1" }}>📅 Upcoming Matches</h2>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#f8f9fa"
        }}>
          <thead style={{ backgroundColor: "#1565c0", color: "white" }}>
            <tr>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Match</th>
              <th style={thStyle}>Venue</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((m, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{m.date}</td>
                <td style={tdStyle}>{m.match}</td>
                <td style={tdStyle}>{m.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Featured Players */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#0d47a1" }}>⭐ Featured Players</h2>
        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {players.map((p, index) => (
            <div key={index} style={{
              width: "200px",
              background: "#f8f9fa",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
              <img src={p.img} alt={p.name} style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }} />
              <h3>{p.name}</h3>
              <p>{p.team}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  border: "1px solid white",
  textAlign: "center"
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center"
};
