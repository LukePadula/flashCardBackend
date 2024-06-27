const express = require("express");
const router = express.Router();

const userLogin = require("../authentication/userLogin");
const userRegister = require("../authentication/userRegister");

router.post("/register", async (req, res) => {
  res.send(await userRegister(req.body));
});

router.post("/login", async (req, res) => {
  console.log("HIELLAOSDSD");
  // res.send(await userLogin(req.body));
});

module.exports = router;
