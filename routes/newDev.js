const express = require("express");
const { Router } = require("express");

const devRouter = express.Router();

const itemsController = require("../controllers/itemsController");

devRouter.get("/", (req, res) => {
  res.render("formdev");
});

devRouter.post("/", itemsController.createDevPost);

module.exports = devRouter;
