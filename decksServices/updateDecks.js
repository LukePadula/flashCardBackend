const runQuery = require("../database/databaseOperation");

const updateDecks = async ({ name }, { id }) => {
  console.log(name, id, "HI");
  const data = await runQuery("UPDATE decks SET name = ? WHERE id = ?;", [
    name,
    id,
  ]);
  console.log(data);
};

module.exports = updateDecks;
