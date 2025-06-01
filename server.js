const express = require('express');
const path = require('path');
const db = require('./db'); // Asegúrate de que este archivo exista y esté configurado correctamente

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));
// Middleware para parsear JSON
app.use(express.json());

app.post('/api/productos', (req, res) => {
  const productos = req.body; // Asumiendo que recibes un array de productos
  if (!Array.isArray(productos) || productos.length === 0) {
    return res.status(400).json({ error: 'Se espera un array de productos' });
  }

  // Aquí podrías insertar los productos en la base de datos
  // Por simplicidad, solo devolveremos los productos recibidos
  res.json({ message: 'Productos recibidos', productos });
});

// Ruta raíz
app.get('/api/productos', (req, res) => {
 db.query('SELECT * FROM producto', (error, resultados) => {
    if (error) {
      console.error('Error al consultar la base de datos:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    res.json(resultados);
  });
});
 
 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
