const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/api/auth");
const subscribeRouter = require("./routes/api/subscribe");
const recipesRouter = require("./routes/api/recipes");
const ingredientsListRouter = require("./routes/api/ingredientsList");

const searchByTitleRouter = require("./routes/api/search");
const ownRecipesRouter = require("./routes/api/ownRecipes");

const shoppingListRouter = require("./routes/api/shoppingList");
const favoritesRouter = require("./routes/api/favorites");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/search", searchByTitleRouter);
app.use("/api/ingredients", ingredientsListRouter);
app.use("/api/shopping-list", shoppingListRouter);
app.use("/api/ownRecipes", ownRecipesRouter);
app.use("/api/favorites", favoritesRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
