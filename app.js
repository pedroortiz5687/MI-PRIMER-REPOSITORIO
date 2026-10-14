

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
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

// R1: estado del servidor
app.get('/estado', (req, res) => {
  res.json({
    servidor: 'ok',
    hora: new Date().toLocaleString(),
    totalActividades: actividades.length,
  });
});

app.get('/actividades', (req, res) => {
  console.log('query:', req.query);
  const { tipo } = req.query;

  if (!tipo) {
    return res.json(actividades);
  }

  const filtradas = actividades.filter((a) => a.tipo === tipo.toLowerCase());
  res.json(filtradas);
});

// R2: va ANTES de /actividades/:id, si no, ":id" captura la palabra "gratis"
app.get('/actividades/gratis', (req, res) => {
  const gratis = actividades.filter((a) => a.precio === 0);
  res.json(gratis);
});

app.get('/actividades/:id', (req, res) => {
  const id = Number(req.params.id);
  const actividad = actividades.find((a) => a.id === id);

  if (!actividad) {
    return res.status(404).json({
      mensaje: `No existe la actividad con id ${req.params.id}`,
    });
  }

  res.json(actividad);
});

// R3: POST con validación
app.post('/actividades', (req, res) => {
  const { nombre, tipo, precio } = req.body || {};

  if (!nombre) {
    return res.status(400).json({ mensaje: 'Falta el nombre' });
  }

  if (!tipo) {
    return res.status(400).json({ mensaje: 'Falta el tipo' });
  }

  if (typeof precio !== 'number' || precio < 0) {
    return res
      .status(400)
      .json({ mensaje: 'El precio debe ser un número mayor o igual a 0' });
  }

  const nueva = { id: actividades.length + 1, nombre, tipo, precio };
  actividades.push(nueva);
  res.status(201).json(nueva);
});

// SIEMPRE de último, después de todas las rutas
app.use((req, res) => {
  res.status(404).json({ mensaje: `No existe la ruta ${req.method} ${req.url}` });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});