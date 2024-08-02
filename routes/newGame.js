const express = require("express");
const { Router } = require("express");

const gameRouter = express.Router();

const itemsController = require("../controllers/itemsController");

gameRouter.get("/", itemsController.getSelectDevGenres);

gameRouter.post("/", itemsController.createGamePost);

module.exports = gameRouter;
