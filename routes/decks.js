const express = require("express");
const router = express.Router();
const {
  retrieveDeckList,
  retrieveDeck,
} = require("../decksServices/retrieveDecks");
const insertDecks = require("../decksServices/insertDecks");
const deleteDecks = require("../decksServices/deleteDecks");
const updateDecks = require("../decksServices/updateDecks");

router.get("/", async (req, res) => {
  try {
    res.send(await retrieveDeckList());
  } catch (error) {
    res.send(error);
  }
  // Get all decks tied to user.
});
router.get("/view/:id", async (req, res) => {
  try {
    const data = await retrieveDeck(req.params, true);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const data = await retrieveDeck(req.params, false);
    console.log(data, "DATA");
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await insertDecks(req.body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await updateDecks(req.body, req.params);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await deleteDecks(req.params);
    res.send("Deleted");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
