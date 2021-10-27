const express = require('express');
const APIRouter = express.Router();
const Players = require('../models/players.js'); // Require players model file so we can use it in this file

//? INDEX ROUTE - ROUTE SHOWING ALL PLAYERS FROM A SPECIFIC TEAM
// '/' is the same as api/players since we specify api/players in the sever.js file and so a / by itself represents that
APIRouter.get('/', async (req, res) => {
  try {
    const roster = await Players.find({});
    res.status(200).json(roster);
  } catch (error) {
    res.status(400).json(error);
  }
});

APIRouter.post('/', async (req, res) => {
  try {
    const newPost = await Players.create(req.body);
    console.log(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = APIRouter;
