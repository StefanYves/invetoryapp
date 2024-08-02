const db = require("../db/queries");

async function getItemsC(req, res) {
  const games = await db.getItems();

  console.log(games);

  res.render("index", { games });
}
async function getDevsC(req, res) {
  const devs = await db.getDevs();

  res.render("dev", { devs });
}

async function getGenresC(req, res) {
  const genres = await db.getGenres();

  res.render("genre", { genres });
}

async function getSelectDevGenres(req, res) {
  const genres = await db.getGenres();
  const devs = await db.getDevs();

  res.render("formgames", { genres, devs });
}

async function createGamePost(req, res) {
  const { title, release_date, genre_id, dev_id, price } = req.body;

  await db.insertGames(title, release_date, genre_id, dev_id, price);

  res.redirect("/");
}

async function createDevPost(req, res) {
  const { name } = req.body;

  await db.insertDevs(name);

  res.redirect("/");
}

async function createGenrePost(req, res) {
  const { name } = req.body;

  await db.insertGenres(name);

  res.redirect("/");
}

async function deleteDevC(req, res) {
  const devId = parseInt(req.params.id, 10);

  await db.deleteGamesByDev(devId);

  await db.deleteDev(devId);

  res.status(200).json({ message: "Genre deleted successfully" });
}

async function deleteGenreC(req, res) {
  const genreId = parseInt(req.params.id, 10);

  await db.deleteGamesByGenre(genreId);

  await db.deleteGenre(genreId);

  res.status(200).json({ message: "Dev deleted successfully" });
}

async function deleteGameC(req, res) {
  const itemId = parseInt(req.params.id, 10);

  await db.deleteGame(itemId);

  res.status(200).json({ message: "Game deleted successfully" });
}

module.exports = {
  getItemsC,
  getDevsC,
  getGenresC,
  getSelectDevGenres,
  createGamePost,
  createDevPost,
  createGenrePost,
  deleteDevC,
  deleteGenreC,
  deleteGameC,
};
