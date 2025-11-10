import React, { useState } from "react";

export default function Home() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Mouse", price: 250000 },
    { id: 3, name: "Keyboard", price: 400000 },
  ]);

  const showDetail = (p) => {
    alert(`Produk: ${p.name}\nHarga: Rp${p.price.toLocaleString()}`);
  };

  return (
    <div>
      <h2>Selamat Datang di Toko Kami </h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Rp{p.price.toLocaleString()}{" "}
            <button onClick={() => showDetail(p)}>Lihat Detail</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
