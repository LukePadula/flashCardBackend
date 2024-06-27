// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cardsRoutes = require("./routes/cards");
const cardContentRoutes = require("./routes/cardContent");
const decksRoutes = require("./routes/decks");
const userRoutes = require("./routes/user");
const { verifyJwtToken } = require("./utils/jwtTokenUtils");

app.use(express.json());
app.use("/test", () => console.log("HIAAAA"));
app.use("/users", userRoutes);
app.use("/cards", verifyJwtToken, cardsRoutes);
app.use("/decks", verifyJwtToken, decksRoutes);
app.use("/generateCardContent", verifyJwtToken, cardContentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
