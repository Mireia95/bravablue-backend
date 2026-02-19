const mongoose = require('mongoose')

const Schema = mongoose.Schema

const speciesSchema = new Schema(
  {
    name: { type: String, required: true },
    latinName: { type: String, required: true },
    description: { type: String, required: true },
    rarity: {
      type: String,
      enum: ['común', 'poco común', 'raro', 'legendario'],
      required: true,
      location: { type: String },
      depth: { type: String },
      season: {},
      habitat: {},
      curiousFact: /* comments user? */ {}.name
    },
    image: { type: String, trim: true }
  },
  {
    timestamps: true,
    collections: 'species'
  }
)

const Species = mongoose.model('species', speciesSchema, 'species')

module.exports = Species
