const express = require("express");
const { Router } = require("express");

const genreRouter = express.Router();

const itemsController = require("../controllers/itemsController");

genreRouter.get("/", (req, res) => {
  res.render("formgenre");
});

genreRouter.post("/", itemsController.createGenrePost);

module.exports = genreRouter;
