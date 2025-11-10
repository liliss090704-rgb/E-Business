// GET semua data
fetch('http://localhost:5000/api/data')
  .then(res => res.json())
  .then(data => console.log(data));

// POST data baru
fetch('http://localhost:5000/api/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nama: 'Budi', email: 'budi@gmail.com', nohp: '081122334455' })
});

// PUT update data
fetch('http://localhost:5000/api/data/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nama: 'Lilis Updated', email: 'lilisupdate@gmail.com', nohp: '08987654321' })
});

// DELETE data
fetch('http://localhost:5000/api/data/1', { method: 'DELETE' });
