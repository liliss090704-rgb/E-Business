import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Hubungi Kami 📬</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nama: </label>
            <input
              type="text"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Pesan: </label>
            <textarea
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              required
            />
          </div>
          <button type="submit">Kirim</button>
        </form>
      ) : (
        <div>
          <p>Terima kasih, {form.nama}!</p>
          <p>Pesan kamu: "{form.pesan}" sudah kami terima.</p>
        </div>
      )}
    </div>
  );
}
