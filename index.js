require('dotenv').config()

const express = require('express')

const { connectDB } = require('./src/config/db')

const app = express()

connectDB() //conectamos a la BBDD

//ruta general de error
app.use((req, res, next) => {
  const error = new Error('route not found')
  error.status = 404
  next(error)
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
