const express = require("express");
const { Router } = express.Router();

const deleteDev = express.Router();

const itemsController = require("../controllers/itemsController");

deleteDev.delete("/dev/:id", itemsController.deleteDevC);

module.exports = deleteDev;
