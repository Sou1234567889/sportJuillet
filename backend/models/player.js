const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  nbr: Number,
  position: String,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
