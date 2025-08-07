import React from "react";

export default function Table() {
  const pointsTable = [
    { pos: 1, team: "Chennai Super Kings", matches: 14, wins: 9, losses: 5, nrr: "+0.750", points: 18 },
    { pos: 2, team: "Mumbai Indians", matches: 14, wins: 9, losses: 5, nrr: "+0.600", points: 18 },
    { pos: 3, team: "Gujarat Titans", matches: 14, wins: 8, losses: 6, nrr: "+0.500", points: 16 },
    { pos: 4, team: "Rajasthan Royals", matches: 14, wins: 8, losses: 6, nrr: "+0.450", points: 16 },
    { pos: 5, team: "Royal Challengers Bangalore", matches: 14, wins: 7, losses: 7, nrr: "+0.200", points: 14 },
    { pos: 6, team: "Lucknow Super Giants", matches: 14, wins: 7, losses: 7, nrr: "-0.050", points: 14 },
    { pos: 7, team: "Sunrisers Hyderabad", matches: 14, wins: 6, losses: 8, nrr: "-0.200", points: 12 },
    { pos: 8, team: "Delhi Capitals", matches: 14, wins: 5, losses: 9, nrr: "-0.350", points: 10 },
    { pos: 9, team: "Kolkata Knight Riders", matches: 14, wins: 5, losses: 9, nrr: "-0.400", points: 10 },
    { pos: 10, team: "Punjab Kings", matches: 14, wins: 4, losses: 10, nrr: "-0.500", points: 8 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🏆 IPL 2025 Points Table</h1>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        textAlign: "center",
        backgroundColor: "#f8f9fa"
      }}>
        <thead style={{ backgroundColor: "#0d47a1", color: "white" }}>
          <tr>
            <th style={thStyle}>Pos</th>
            <th style={thStyle}>Team</th>
            <th style={thStyle}>Matches</th>
            <th style={thStyle}>Wins</th>
            <th style={thStyle}>Losses</th>
            <th style={thStyle}>NRR</th>
            <th style={thStyle}>Points</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((team, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{team.pos}</td>
              <td style={{ ...tdStyle, fontWeight: "bold" }}>{team.team}</td>
              <td style={tdStyle}>{team.matches}</td>
              <td style={tdStyle}>{team.wins}</td>
              <td style={tdStyle}>{team.losses}</td>
              <td style={tdStyle}>{team.nrr}</td>
              <td style={tdStyle}>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  border: "1px solid white"
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd"
};
