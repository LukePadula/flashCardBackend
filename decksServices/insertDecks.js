const runQuery = require("../database/databaseOperation");
const generateId = require("../utils/recordUtils");

const insertDecks = async ({ name, user_id }) => {
  const id = generateId();
  const data = await runQuery(
    "INSERT INTO `decks` (`id`, `name`, `user_id`, `created_date`) VALUES (?, ?, ?, ?);",
    [id, name, user_id, new Date()]
  );
  return { id };
};

module.exports = insertDecks;
