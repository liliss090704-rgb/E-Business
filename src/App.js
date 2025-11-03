import React, { useState, useEffect } from "react";

function App() {
  const [waktu, setWaktu] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
  };

  const cardStyle = {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "10px" }}>⏰ Tugas 3 - useEffect Sederhana</h2>
        <h3>{waktu}</h3>
      </div>
    </div>
  );
}

export default App;
