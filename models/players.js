//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
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
  team: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Player = mongoose.model('Player', playerSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data
// const player1 = Player.create({ //! Change player1 and Player for names that fit your application. Creation of a player1 and saved to database. Want to comment this out otherwise it will keep saving data to mongoDB each time you save this file and you will have duplicates in your MongoDB
//   firstName: 'Magic',
//   lastName: 'Johson',
//   number: 32,
//   team: 'Lakers',
//   position: 'PG'
// });

//? DELETION OF THE 1ST RECORD MONGOOSE FINDS IN MongoDB WITH THE SPECIFIED CRITERIA - Uncomment this out if you want to delete sample data above
// Player.findOneAndDelete({ firstName: 'Magic' }).then(data => console.log(data)); //! Change Player for a name that fits your application

module.exports = Player; //! Change Player for name that fits your Application. This should be consistent with name given in line 31 of code above
