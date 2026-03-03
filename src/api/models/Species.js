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
      required: true
    },
    location: { type: mongoose.Types.ObjectId, ref: 'spots' }, //!
    season: { type: String },
    habitat: { type: String },
    activity: {
      type: String,
      enum: ['diurno', 'nocturno', 'siempre'],
      required: true
    },
    curiousFact: { type: String },
    comments: { type: mongoose.Types.ObjectId, ref: 'comments' }, //!comments user
    image: { type: String, trim: true }
  },
  {
    timestamps: true,
    collections: 'species'
  }
)

const Species = mongoose.model('species', speciesSchema, 'species')

module.exports = Species
