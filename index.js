require('dotenv').config();

const express = require('express');

const { connectDB } = require('./src/config/db');
const mainRouter = require('./src/api/routes/main');

const app = express();

connectDB(); //conectamos a la BBDD
app.use(express.json()); //para procesar datos en formato json
app.use('/api/v1', mainRouter);

//ruta general de error
app.use((req, res, next) => {
  const error = new Error('route not found');
  error.status = 404;
  next(error);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
