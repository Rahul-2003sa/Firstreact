import React from "react";

export default function Stats() {
  const batsmen = [
    { pos: 1, name: "Virat Kohli", runs: 640, avg: 53.3, sr: 140.2 },
    { pos: 2, name: "Shubman Gill", runs: 620, avg: 49.6, sr: 145.8 },
    { pos: 3, name: "KL Rahul", runs: 600, avg: 46.1, sr: 138.7 },
    { pos: 4, name: "Ruturaj Gaikwad", runs: 580, avg: 44.6, sr: 141.5 },
    { pos: 5, name: "Suryakumar Yadav", runs: 565, avg: 42.4, sr: 148.2 },
    { pos: 6, name: "Sanju Samson", runs: 550, avg: 40.7, sr: 136.9 },
    { pos: 7, name: "Shreyas Iyer", runs: 530, avg: 38.4, sr: 132.1 },
    { pos: 8, name: "Ishan Kishan", runs: 520, avg: 37.1, sr: 142.3 },
    { pos: 9, name: "Rishabh Pant", runs: 500, avg: 35.2, sr: 150.5 },
    { pos: 10, name: "Prithvi Shaw", runs: 480, avg: 33.8, sr: 147.8 },
  ];

  const bowlers = [
    { pos: 1, name: "Mohammed Shami", wickets: 26, avg: 18.5, eco: 7.1 },
    { pos: 2, name: "Mohammed Siraj", wickets: 24, avg: 19.2, eco: 7.3 },
    { pos: 3, name: "Arshdeep Singh", wickets: 23, avg: 20.1, eco: 7.4 },
    { pos: 4, name: "Yuzvendra Chahal", wickets: 22, avg: 21.4, eco: 7.6 },
    { pos: 5, name: "Kuldeep Yadav", wickets: 21, avg: 22.1, eco: 7.2 },
    { pos: 6, name: "Ravi Bishnoi", wickets: 20, avg: 23.0, eco: 7.5 },
    { pos: 7, name: "Avesh Khan", wickets: 19, avg: 24.5, eco: 7.8 },
    { pos: 8, name: "Shardul Thakur", wickets: 18, avg: 25.6, eco: 8.0 },
    { pos: 9, name: "Axar Patel", wickets: 17, avg: 26.8, eco: 7.3 },
    { pos: 10, name: "Washington Sundar", wickets: 16, avg: 27.9, eco: 7.9 },
  ];

  const allRounders = [
    { pos: 1, name: "Hardik Pandya", runs: 450, wickets: 15 },
    { pos: 2, name: "Ravindra Jadeja", runs: 420, wickets: 16 },
    { pos: 3, name: "Axar Patel", runs: 410, wickets: 17 },
    { pos: 4, name: "Venkatesh Iyer", runs: 400, wickets: 12 },
    { pos: 5, name: "Shivam Dube", runs: 380, wickets: 10 },
    { pos: 6, name: "Krunal Pandya", runs: 360, wickets: 11 },
    { pos: 7, name: "Washington Sundar", runs: 340, wickets: 13 },
    { pos: 8, name: "Deepak Hooda", runs: 320, wickets: 8 },
    { pos: 9, name: "Rahul Tewatia", runs: 300, wickets: 7 },
    { pos: 10, name: "Rishi Dhawan", runs: 280, wickets: 9 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>📊 IPL 2025 Player Stats</h1>

      {/* Batsmen Table */}
      <StatsTable
        title="🏏 Top 10 Indian Batsmen"
        headers={["Pos", "Name", "Runs", "Avg", "SR"]}
        data={batsmen.map(b => [b.pos, b.name, b.runs, b.avg, b.sr])}
      />

      {/* Bowlers Table */}
      <StatsTable
        title="🎯 Top 10 Bowlers"
        headers={["Pos", "Name", "Wickets", "Avg", "Econ"]}
        data={bowlers.map(b => [b.pos, b.name, b.wickets, b.avg, b.eco])}
      />

      {/* All-Rounders Table */}
      <StatsTable
        title="💪 Top 10 All-Rounders"
        headers={["Pos", "Name", "Runs", "Wickets"]}
        data={allRounders.map(a => [a.pos, a.name, a.runs, a.wickets])}
      />
    </div>
  );
}

function StatsTable({ title, headers, data }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ background: "#0d47a1", color: "white", padding: "10px" }}>{title}</h2>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
        backgroundColor: "#f8f9fa"
      }}>
        <thead style={{ backgroundColor: "#1565c0", color: "white" }}>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              {row.map((cell, j) => (
                <td key={j} style={tdStyle}>{cell}</td>
              ))}
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
