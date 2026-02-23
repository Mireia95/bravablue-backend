const mongoose = require('mongoose');
//!const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

//creo Schema
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, trim: true, required: true },
    password: {
      type: String,
      trim: true,
      minlength: [5, 'Contraseña con mínimo 5 carácteres'],
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
      type: Date,
      required: true
    },
    species: [{ type: mongoose.Types.ObjectId, ref: 'species' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comments' }],
    trophies: [{ type: mongoose.Types.ObjectId, ref: 'trophies' }]
  },
  {
    timestamps: true,
    collections: 'users'
  }
);

//hashear el password usando bcrypt
/* userSchema.pre('save', function (next) {
  //ATENCION: asi cada vez que se usa User.save() hashea el password de nuevo
  //posible error en hacer login despues
  //solucion: añadir esta linea de código:
  if (!this.isModified('password')) return next()
  this.password = bcrypt.hashSync(this.password, 10)
  next()
}) */

//creo modelo
const User = mongoose.model('users', userSchema, 'users');

module.exports = User;
