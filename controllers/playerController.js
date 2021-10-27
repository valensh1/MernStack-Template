//? CONTROLLER FILE
// The purpose of this file is to keep our routes organized. This playerController.js file deals with all player routes. Another controller file could be used for all routes related to teams, etc.
const express = require('express');
const APIRouter = express.Router();
const Players = require('../models/players.js'); // Require players model file so we can use it in this file

//? INDEX ROUTE - ROUTE SHOWING ALL PLAYERS FROM A SPECIFIC TEAM. REQUEST COMES FROM Roster.js FILE ON FRONT-END
// '/' is the same as api/players since we specify api/players in the sever.js file and so a / by itself represents that
APIRouter.get('/', async (req, res) => {
  try {
    const roster = await Players.find({});
    res.status(200).json(roster);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? POST REQUEST - COMES FROM NewPlayer.js FILE ON FRONT-END
APIRouter.post('/', async (req, res) => {
  try {
    const newPost = await Players.create(req.body);
    console.log(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = APIRouter;
