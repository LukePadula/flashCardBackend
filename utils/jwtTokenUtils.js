const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY || "your_secret_key";

const signJwtToken = (userId) => {
  return jwt.sign({ userId }, secretKey, {
    expiresIn: "1h",
  });
};

const verifyJwtToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.body.userId, "BODYH");
  const userId = req.body.userId;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Access Denied: Token not provided or incorrect format");
  }

  if (!userId) {
    throw new Error("Access Denied: User Id not provided in body");
  }

  const token = req.headers.authorization.slice(
    7,
    req.headers.authorization.length
  );

  try {
    const decodedJwt = jwt.verify(token, secretKey);
    console.log(decodedJwt);

    if (!decodedJwt.userId || decodedJwt.userId !== userId) {
      throw new Error();
    }
  } catch (e) {
    throw new Error("Access Denied: Invalid token 2");
  }

  next();
};

module.exports = { signJwtToken, verifyJwtToken };
