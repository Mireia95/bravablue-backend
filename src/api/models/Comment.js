const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    species: { type: mongoose.Types.ObjectId, ref: 'species', required: true },
    description: { type: String },
    location: { type: mongoose.Types.ObjectId, ref: 'spots' },
    date: { type: Date, default: Date.now },
    state: { type: String, enum: ['public, private'] }
  },
  {
    timestamps: true,
    collections: 'movies'
  }
)

const Comment = mongoose.model('comments', commentSchema, 'comments')

module.exports = Comment
