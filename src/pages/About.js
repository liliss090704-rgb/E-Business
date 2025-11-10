import React, { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h2>Tentang Kami</h2>
      <p>
        Kami adalah perusahaan yang bergerak di bidang teknologi dan solusi digital.
      </p>
      {showMore && (
        <p>
          Visi kami adalah membantu UMKM bertransformasi ke era digital dengan
          layanan berbasis web dan aplikasi mobile.
        </p>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Sembunyikan Info" : "Tampilkan Info Lengkap"}
      </button>
    </div>
  );
}
