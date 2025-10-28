import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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

  const buttonStyle = {
    background: "#66a6ff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  const resetStyle = {
    ...buttonStyle,
    background: "#ff6b6b",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: "20px" }}> Tugas 2: Count Button</h1>
        <p style={{ fontSize: "20px" }}>
          Nilai Count Saat Ini: <strong>{count}</strong>
        </p>
        <div>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => setCount(count + 1)}
          >
            Tambah
          </button>

          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => setCount(count - 1)}
          >
           Kurang
          </button>

          <button
            style={resetStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
