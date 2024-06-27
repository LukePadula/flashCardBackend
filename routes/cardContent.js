const express = require("express");
const router = express.Router();
const generateCardContent = require("../cardsServices/generateCardContent");

router.post("/", async (req, res) => {
  const { content } = req.body;

  const calloutResponse = await generateCardContent(content);

  const index = calloutResponse.indexOf("Answer: ");
  const question = calloutResponse.substring("Question: ".length, index).trim();
  const answer = calloutResponse.substring(index + "Answer: ".length).trim();

  res.send({ question, answer });
});

module.exports = router;
