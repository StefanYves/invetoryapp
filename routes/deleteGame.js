const express = require("express");
const { Router } = express.Router();

const deleteGame = express.Router();

const itemsController = require("../controllers/itemsController");

deleteGame.delete("/games/:id", itemsController.deleteGameC);

module.exports = deleteGame;
