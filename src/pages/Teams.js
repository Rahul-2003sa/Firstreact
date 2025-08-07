import React from "react";
import Teamcard from "../components/Teamcard";

// Dummy logos (replace with real ones in /src/assets)
import cskLogo from "../assets/csk.png";
import miLogo from "../assets/mi.jpg";
import rcbLogo from "../assets/rcb.jpg";
import kkrLogo from "../assets/kkr.png";
import srhLogo from "../assets/srh.png";
import dcLogo from "../assets/dc.jpg";
import rrLogo from "../assets/rr.png";
import lsgLogo from "../assets/lsg.jpg";
import gtLogo from "../assets/gt.png";
import pkLogo from "../assets/pbks.png";

export default function Teams() {
  const teams = [
    { name: "Chennai Super Kings", logo: cskLogo, captain: "Ruturaj Gaikwad" },
    { name: "Mumbai Indians", logo: miLogo, captain: "Hardik Pandya" },
    { name: "Royal Challengers Bangalore", logo: rcbLogo, captain: "Faf du Plessis" },
    { name: "Kolkata Knight Riders", logo: kkrLogo, captain: "Shreyas Iyer" },
    { name: "Sunrisers Hyderabad", logo: srhLogo, captain: "Pat Cummins" },
    { name: "Delhi Capitals", logo: dcLogo, captain: "Rishabh Pant" },
    { name: "Rajasthan Royals", logo: rrLogo, captain: "Sanju Samson" },
    { name: "Lucknow Super Giants", logo: lsgLogo, captain: "KL Rahul" },
    { name: "Gujarat Titans", logo: gtLogo, captain: "Shubman Gill" },
    { name: "Punjab Kings", logo: pkLogo, captain: "Shikhar Dhawan" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🏏 IPL 2025 Teams</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {teams.map((team, index) => (
          <Teamcard key={index} name={team.name} logo={team.logo} captain={team.captain} />
        ))}
      </div>
    </div>
  );
}
