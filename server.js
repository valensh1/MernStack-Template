//? REQUIREMENTS - npm Packages
require('dotenv').config(); // Requirement to be able to use .env file so we can reference passwords without displaying them in code.
const express = require('express');
const cors = require('cors');
const path = require('path'); // Provides utilities for working with file and directory paths
const PORT = process.env.PORT || 5000; // Creation of variable that is either the port the hosting service runs our application on when deployed or localhost:5000 if working on our local machine
const app = express(); // Creation of variable app which calls the express function
app.use(cors()); // Every time file is saved the application runs the cors function

//? MONGOOSE/MongoDB SET-UP
const Player = require('./models/players.js'); // Creation of variable to pass our Player Model (or whatever you called your model) to this file so we can use our Model in this file when accessing Mongoose/MongoDB
const mongoose = require('mongoose'); // Need to require Mongoose in order to access our MongoDB database; Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
const MONGODB_URI = process.env.MONGODB_URI; // Creation of variable which stores our MongoDB connection string containing our password to access our database. This connection string is stored on our .env file
const db = mongoose.connection; // Creation of variable to shorten our code. Instead of having to type mongoose.connection each time we can just refer to it as db.

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on('open', () => {
  console.log('Mongo is Connected');
});

//? MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // Middleware - so we can use req.body otherwise Express can't read what's in the body of our POST request. This Middleware parses data from forms in the x-www-form-urlencoded format
app.use(express.json()); // Middleware - for parsing data coming in the body of the POST request as json format

//? API Routes
app.use('/api/players', require('./controllers/playerController.js')); // Every time this api/players path is hit require this file

// app.get('/players', async (req, res) => {
//   try {
//     const rosters = await Player.find({});
//     res.send(rosters);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get('/', async (req, res) => {
//   try {
//     res.send('You hit the everything route');
//   } catch (error) {
//     console.log(error);
//   }
// });

//? DEPLOYMENT CODE
if (process.env.NODE_ENV === 'production') {
  // When .env file has NODE_ENV=production in it run this code below (we must put this in our .env file for when deploying)
  app.use(express.static(path.join(__dirname, '/client/build'))); // When .env file has NODE_ENV=production then look for the static file in the /client/build folder. This folder won't be there until you go into the client folder and run npm run build command in Terminal.

  // Code below activates our React front-end. Any routes not shown above in API routes this code will send a file from the /client/build/index.html file which is basically our React front-end files
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  // Code to notify you that app is running on PORT 5000 on local computer.
  console.log(`Listening on PORT ${PORT} yo`);
});
