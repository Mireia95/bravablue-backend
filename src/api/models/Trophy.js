const mongoose = require('mongoose')

const Schema = mongoose.Schema

const trophySchema = new Schema(
  {
    image: { type: String, trim: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collections: 'trophies'
  }
)

const Trophy = mongoose.model('trophies', trophySchema, 'trophies')

module.exports = Trophy
