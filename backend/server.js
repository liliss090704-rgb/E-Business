const express = require('express');
const cors = require('cors');
const open = require('open');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let data = [
  { id: 1, nama: "Lilis Suryani", email: "lilis@gmail.com", nohp: "08123456789" }
];

app.get('/api/data', (req, res) => res.json(data));

app.post('/api/data', (req, res) => {
  const newItem = { id: data.length + 1, ...req.body };
  data.push(newItem);
  res.status(201).json({ message: "Data berhasil ditambahkan", data: newItem });
});

app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = { id, ...req.body };
    res.json({ message: "Data berhasil diubah", data: data[index] });
  } else res.status(404).json({ message: "Data tidak ditemukan" });
});

app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.json({ message: "Data berhasil dihapus" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  open(`http://localhost:${PORT}/api/data`);
});
