const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res, next ) => {
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('API Aventuras San Gil funcionando');
});


// Datos de ejemplo en memoria (todavía no hay base de datos)
const actividades = [
  { id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
  { id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
  { id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
  { id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 },
];

app.get('/actividades', (req, res) => {
  res.json(actividades);
});

app.get('/actividades/:id', (req, res) => {
  console.log('params:', req.params);
  const actividad = actividades.find((a) => a.id === req.params.id);
  res.json(actividad);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});