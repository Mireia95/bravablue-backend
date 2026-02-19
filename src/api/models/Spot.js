const mongoose = require('mongoose')

const Schema = mongoose.Schema

const spotSchema = new Schema(
  {
    image: { type: String, trim: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ['principiante', 'intermedio', 'avanzado']
    }
  },
  {
    timestamps: true,
    collections: 'spots'
  }
)

const Spot = mongoose.model('spots', spotSchema, 'spots')

module.exports = Spot
