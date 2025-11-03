import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]); // buat nyimpan data API
  const [loading, setLoading] = useState(true); // indikator loading

  useEffect(() => {
    // fetch API saat komponen pertama kali tampil
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // ubah data ke JSON
      .then((data) => {
        setUsers(data); // simpan data ke state
        setLoading(false); // matikan loading
      })
      .catch((error) => {
        console.error("Gagal mengambil data API:", error);
        setLoading(false);
      });
  }, []); // [] agar hanya dijalankan sekali saat komponen di-render

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>📋 Data Pengguna (Tugas 4)</h1>

      {loading ? (
        <p>⏳ Sedang mengambil data...</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            borderCollapse: "collapse",
            margin: "20px auto",
            width: "80%",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Kota</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;