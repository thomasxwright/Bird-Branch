const mongoose = require('mongoose')

const SightingSchema = new mongoose.Schema({

  birdId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: String,
  cloudinary_id: String,
  notes: String,
  caption: String,
  userId: {
    type: String,
    required: true
  },
  location: {
    latitude: Number,
    longitude: Number
  }
})

module.exports = mongoose.model('Sighting', SightingSchema)