//? CONTROLLER FILE
// The purpose of this file is to keep our routes organized. This playerController.js file deals with all player routes. Another controller file could be used for all routes related to teams, etc.
const express = require('express');
const APIRouter = express.Router();
const Players = require('../models/players.js'); // Require players model file so we can use it in this file

//? INDEX ROUTE - (READ) ROUTE SHOWING ALL PLAYERS FROM A SPECIFIC TEAM. REQUEST COMES FROM Roster.js FILE ON FRONT-END
// '/' is the same as api/players since we specify api/players in the sever.js file and so a / by itself represents that
APIRouter.get('/', async (req, res) => {
  try {
    const roster = await Players.find({});
    res.status(200).json(roster);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? SHOW ROUTE - (READ) SHOW PAGE DISPLAYING ONE INDIVIDUAL PLAYER
APIRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const showPagePlayer = await Players.findById(id); // Instead of destructuring id above could just have done this ---> const showPagePlayer = await Players.findById(req.params.id)
    res.status(200).json(showPagePlayer);
    console.log(showPagePlayer);
  } catch (error) {
    res.status(400).send(error);
  }
});

//? DELETE ROUTE - DELETES INDIVIDUAL PLAYER FROM SHOW PAGE
APIRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlayer = await Players.findByIdAndDelete(id); // Instead of destructuring id above could just have done this ---> const showPagePlayer = await Players.findById(req.params.id)
    res.status(200).json(deletedPlayer);
    console.log(deletedPlayer);
  } catch (error) {
    res.status(400).send(error);
  }
});

//? POST REQUEST - (CREATE) - COMES FROM NewPlayer.js FILE ON FRONT-END
APIRouter.post('/', async (req, res) => {
  try {
    const newPost = await Players.create(req.body);
    console.log(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? PUT REQUEST - (UPDATE/EDIT) - COMES FROM editPlayer.js FILE ON FRONT-END
APIRouter.put('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params; // Destructure of id out of req.params

    // Find req.params.id and replaces with req.body and returns the newly updated document. The return of newly updated document happens because of the new:true in code.
    const playerToUpdate = await Players.findByIdAndUpdate(
      id, // Could have also put req.params here if I didn't destructure it above
      req.body,
      { new: true }
    );
    res.status(200).json(playerToUpdate);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = APIRouter;
