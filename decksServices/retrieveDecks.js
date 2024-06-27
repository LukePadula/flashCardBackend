const runQuery = require("../database/databaseOperation");
const shuffleArray = require("../utils/deckUtils");

const retrieveDeckList = async () => {
  const data = await runQuery(
    "SELECT id, name, created_date FROM decks ORDER BY created_date DESC;",
    []
  );
  console.log(data);
};

const retrieveDeck = async ({ id }, shuffle) => {
  let data = await runQuery(
    "SELECT cards.id, cards.deck_id, cards.question, cards.answer FROM cards INNER JOIN decks ON cards.deck_id = decks.id WHERE decks.id = ? ORDER BY cards.created_date DESC;",
    [id]
  );

  if (shuffle) {
    data = shuffleArray(data);
  }
  return data;
};

module.exports = { retrieveDeckList, retrieveDeck };
