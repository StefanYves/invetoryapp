const express = require("express");
const { Router } = express.Router();
const db = require("../db/queries"); // Adjust path as needed

const deleteGenre = express.Router();

const itemsController = require("../controllers/itemsController");

deleteGenre.delete("/genres/:id", itemsController.deleteGenreC);

module.exports = deleteGenre;
