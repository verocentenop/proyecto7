const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    age: { type: Number, trim: true, required: true },
    favorites: [
      { type: mongoose.Types.ObjectId, required: false, ref: "models" },
    ],
    rol: {
      type: String,
      required: true,
      enum: ['admin','user'],
      default: 'user'
    }
  },
  { timestamps: true, collection: 'users' }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})
const User = mongoose.model('users', userSchema, 'users')
module.exports = User
