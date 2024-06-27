const runQuery = require("../database/databaseOperation");
const bcrypt = require("bcryptjs");
const { signJwtToken } = require("../utils/jwtTokenUtils");

const userLogin = async ({ email, password }) => {
  const existingUserResult = await runQuery(
    "SELECT id, password FROM users WHERE email = ?;",
    [email]
  );

  if (
    !existingUserResult.length > 0 ||
    !(await bcrypt.compare(password, existingUserResult[0].password))
  ) {
    throw new Error("Invalid credentials");
  }

  return { token: signJwtToken(existingUserResult[0].id) };
};

module.exports = userLogin;
