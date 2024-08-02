const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/index");
const gameRouter = require("./routes/newGame");
const devRouter = require("./routes/newDev");
const genreRouter = require("./routes/newGenre");
const seeDevRouter = require("./routes/dev");
const seeGenreRouter = require("./routes/genre");
const deleteGenreRouter = require("./routes/deleteGenre");
const deleteDevRouter = require("./routes/deleteDev");
const deleteGameRouter = require("./routes/deleteGame");

app.use("/", indexRouter);
app.use("/newgame", gameRouter);
app.use("/newdev", devRouter);
app.use("/newgenre", genreRouter);
app.use("/genre", seeGenreRouter);
app.use("/dev", seeDevRouter);
app.use("/", deleteGenreRouter);
app.use("/", deleteDevRouter);
app.use("/", deleteGameRouter);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
