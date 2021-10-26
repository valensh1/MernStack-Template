const express = require('express');
const APIRouter = express.Router();
const Players = require('../models/players.js'); // Require players model file so we can use it in this file

//? INDEX ROUTE - ROUTE SHOWING ALL PLAYERS FROM A SPECIFIC TEAM
APIRouter.get('/', async (req, res) => {
  try {
    const roster = await Players.find({});
    res.status(200).json(roster);
  } catch (error) {
    res.status(400).json(error);
  }
});
