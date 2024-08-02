const express = require("express");
const { Router } = require("express");

const seeDevRouter = express.Router();

const itemsController = require("../controllers/itemsController");

seeDevRouter.get("/", itemsController.getDevsC);

module.exports = seeDevRouter;
