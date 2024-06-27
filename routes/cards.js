const express = require("express");
const router = express.Router();
const insertCards = require("../cardsServices/insertCards");
const deleteCards = require("../cardsServices/deleteCards");
const updateCards = require("../cardsServices/updateCards");

router.post("/", async (req, res) => {
  try {
    const data = await insertCards(req.body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await updateCards(req.body, req.params);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    await deleteCards(req.body);
    res.send("deleted");
  } catch (error) {}
});

module.exports = router;
