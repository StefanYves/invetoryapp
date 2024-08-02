const express = require("express");
const { Router } = require("express");

const seeGenreRouter = express.Router();

const itemsController = require("../controllers/itemsController");

seeGenreRouter.get("/", itemsController.getGenresC);

module.exports = seeGenreRouter;
