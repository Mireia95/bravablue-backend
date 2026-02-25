require('dotenv').config();

const express = require('express');

const { connectDB } = require('./src/config/db');
const mainRouter = require('./src/api/routes/main');

const app = express();

const PORT = 3000; //!CAMBIA CUANDO DESPLIEGUES

connectDB(); //conectamos a la BBDD
app.use(express.json()); //para procesar datos en formato json
app.use('/api/v1', mainRouter);

//ruta no encontrada
app.use((req, res, next) => {
  const error = new Error('route not found');
  error.status = 404;
  next(error);
});

//ruta general de error
app.use((err, req, res, next) => {
  console.error('ERROR: ', err);
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.listen(PORT, () => {
  console.log('http://localhost:3000');
});
