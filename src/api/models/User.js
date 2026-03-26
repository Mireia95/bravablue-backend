const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

//creo Schema
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, trim: true, required: true },
    password: {
      type: String,
      trim: true,
      minlength: [5, 'Password 5 characters minimum'],
      required: true
    },
    image: { type: String, trim: true },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    },
    birthday: {
      type: Date
    },
    species: [{ type: mongoose.Types.ObjectId, ref: 'species' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comments' }],
    trophies: [{ type: mongoose.Types.ObjectId, ref: 'trophies' }]
  },
  {
    timestamps: true,
    collections: 'users'
  }
)

// hashear el password usando bcrypt
//con Mongoose 9 no uso next() porque da error
userSchema.pre('save', async function () {
  // Si el password no ha cambiado, salimos de la función
  if (!this.isModified('password')) return
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (error) {
    throw error
  }
})

//creo modelo
const User = mongoose.model('users', userSchema, 'users')

module.exports = User
