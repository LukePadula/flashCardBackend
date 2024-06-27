const runQuery = require("../database/databaseOperation");

const deleteCards = async ({ id, deck_id }) => {
  const data = await runQuery(
    "DELETE FROM cards WHERE id = ? AND deck_id = ?;",
    [id, deck_id]
  );
  console.log(data);
};

module.exports = deleteCards;
