const runQuery = require("../database/databaseOperation");

const updateCards = async ({ question, answer, deck_id }, { id }) => {
  const data = await runQuery(
    "UPDATE cards SET question = ?, answer = ?, deck_id = ? WHERE id = ?;",
    [question, answer, deck_id, id]
  );
  console.log(data);
};

module.exports = updateCards;
