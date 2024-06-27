const runQuery = require("../database/databaseOperation");

const deleteDecks = async ({ id }) => {
  const data = await runQuery("DELETE FROM decks WHERE id = ?;", [id]);
  console.log(data);
};

module.exports = deleteDecks;
