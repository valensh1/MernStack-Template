const mongoose = require('mongoose');

//? SETTING UP mongoDB SCHEMA
const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Player = mongoose.model('Player', playerSchema); // Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

// const player1 = Player.create({ // Creation of a player and saved to database. Want to comment this out otherwise it will keep saving data to mongoDB and you will have duplicates
//   firstName: 'Shaun',
//   lastName: 'Valentine',
//   number: 23,
// });

module.exports = Player;
