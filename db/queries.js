const pool = require("./pool");

async function getItems() {
  const { rows } = await pool.query(`
    SELECT games.id, games.title, games.release_date, games.price, genres.name AS genre_name, devs.name AS dev_name
    FROM games
    JOIN genres ON games.genre_id = genres.id
    JOIN devs ON games.dev_id = devs.id
    ORDER BY games.title DESC
  `);

  return rows;
}

async function getGenres() {
  const { rows } = await pool.query(
    "SELECT id, name FROM genres ORDER BY name"
  );

  return rows;
}

async function getDevs() {
  const { rows } = await pool.query("SELECT id, name FROM devs ORDER BY name ");

  return rows;
}

async function insertGames(title, release_date, genre_id, dev_id, price) {
  await pool.query(
    "INSERT INTO games (title, release_date, genre_id, dev_id, price) VALUES ($1, $2, $3, $4, $5)",
    [title, release_date, genre_id, dev_id, price]
  );
}

async function insertGenres(name) {
  await pool.query("INSERT INTO genres (name) VALUES ($1)", [name]);
}

async function insertDevs(name) {
  {
    await pool.query("INSERT INTO devs (name) VALUES ($1)", [name]);
  }
}

async function deleteGenre(id) {
  await pool.query("DELETE FROM genres WHERE id = $1", [id]);
}

async function deleteGame(id) {
  await pool.query("DELETE FROM games WHERE id = $1", [id]);
}

async function deleteDev(id) {
  await pool.query("DELETE FROM devs WHERE id = $1", [id]);
}

async function deleteGamesByGenre(genreId) {
  await pool.query("DELETE FROM games WHERE genre_id = $1", [genreId]);
}

async function deleteGamesByDev(devId) {
  await pool.query("DELETE FROM games WHERE dev_id = $1", [devId]);
}

module.exports = {
  getItems,
  getGenres,
  getDevs,
  insertGames,
  insertGenres,
  insertDevs,
  deleteGenre,
  deleteDev,
  deleteGamesByGenre,
  deleteGamesByDev,
  deleteGame,
};
