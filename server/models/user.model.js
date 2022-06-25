const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String },
    dateOfBirth: { type: Date, trim: true },
    phone: { type: Number },
    adress: { type: String },
    city: { type: String },
    occupation: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserSchema', UserSchema);
