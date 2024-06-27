const runQuery = require("../database/databaseOperation");
const generateId = require("../utils/recordUtils");

const insertCards = async ({ question, answer, deck_id }) => {
  const id = generateId();

  const data = await runQuery(
    "INSERT INTO `cards` (`id`, `question`, `answer`, `deck_id`, `created_date`) VALUES (?, ?, ?, ?, ?);",
    [id, question, answer, deck_id, new Date()]
  );
  return { id };
};

module.exports = insertCards;
