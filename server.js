require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const Player = require('./models/players.js');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

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

app.get('/players', async (req, res) => {
  try {
    const rosters = await Player.find({});
    res.send(rosters);
  } catch (error) {
    console.log(error);
  }
});

app.get('/', async (req, res) => {
  try {
    res.send('You hit the everything route');
  } catch (error) {
    console.log(error);
  }
});

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('public'));
  // app.use(express.static(path.resolve(__dirname, './client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} yo`);
});
