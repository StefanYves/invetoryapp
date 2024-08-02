const express = require("express");
const { Router } = require("express");

const indexRouter = express.Router();

const itemsController = require("../controllers/itemsController");

indexRouter.get("/", itemsController.getItemsC);

module.exports = indexRouter;
