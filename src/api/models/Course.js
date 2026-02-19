const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema(
  {
    location: { type: String, trim: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collections: 'course'
  }
)

const Course = mongoose.model('courses', courseSchema, 'courses')

module.exports = Course
