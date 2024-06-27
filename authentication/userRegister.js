const runQuery = require("../database/databaseOperation");
const bcrypt = require("bcryptjs");
const generateId = require("../utils/recordUtils");
const { signJwtToken } = require("../utils/jwtTokenUtils");

const userRegister = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = generateId();

  const existingUserResult = await runQuery(
    "SELECT id, password FROM users WHERE email = ?;",
    [email]
  );

  if (existingUserResult.length > 0) {
    throw new Error("User already exists");
  }

  const result = await runQuery(
    "INSERT INTO `users` (`id`, `email`, `password`,`created_date`) VALUES (?, ?, ?, ?);",
    [userId, email, hashedPassword, new Date()]
  );

  return { id: userId, email, token: signJwtToken() };
};

module.exports = userRegister;
