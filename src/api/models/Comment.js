const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String, trim: true },
    user: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    species: { type: mongoose.Types.ObjectId, ref: 'species', required: true },
    location: { type: mongoose.Types.ObjectId, ref: 'spots' },
    state: { type: String, enum: ['public, private'] }
  },
  {
    timestamps: true,
    collections: 'movies'
  }
)

const Comment = mongoose.model('comments', commentSchema, 'comments')

module.exports = Comment
