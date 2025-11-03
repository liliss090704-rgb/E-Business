import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]); // buat nyimpan data API
  const [loading, setLoading] = useState(true); // indikator loading

  useEffect(() => {
    // fetch API saat komponen pertama kali tampil
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // ubah data ke JSON
      .then((data) => {
        setProducts(data); // simpan data ke state
        setLoading(false); // matikan loading
      })
      .catch((error) => {
        console.error("Gagal mengambil data API:", error);
        setLoading(false);
      });
  }, []); // [] agar hanya dijalankan sekali saat komponen di-render

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Daftar Produk (Studi Kasus: Toko Online)</h1>

      {loading ? (
        <p> Sedang mengambil data produk...</p>
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
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Kategori</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
