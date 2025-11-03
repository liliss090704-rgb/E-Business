import React, { useState, useEffect } from "react";

function App() {
  const [waktu, setWaktu] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Tugas 3 - useEffect Sederhana</h2>
      <h3>⏰ {waktu}</h3>
    </div>
  );
}

export default App;
