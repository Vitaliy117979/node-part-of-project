const User = require("../../models/user");
const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

const getFavorites = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // Отримуємо улюблені рецепти користувача з заповненими даними про рецепти
    const favorites = await User.aggregate([
      { $match: { _id: userId } }, // Знайдемо користувача за його _id
      {
        $lookup: {
          from: "recipes", // З'єднаємо з колекцією "recipes"
          localField: "favorites", // Поле з _id рецептів у користувача
          foreignField: "_id", // Відповідне поле _id у колекції "recipes"
          as: "favorites", // Нове поле з результатом з'єднання "favorites"
        },
      },
      { $unwind: "$favorites" }, // Розгортаємо результат favorites в окремі документи
      {
        $lookup: {
          from: "ingredients", // З'єднаємо з колекцією "ingredients"
          localField: "favorites.ingredients.ingredient", // Поле з _id інгредієнтів у рецепті
          foreignField: "id", // Відповідне поле _id у колекції "ingredients"
          as: "favorites.ingredients", // Нове поле з результатом з'єднання "favorites.ingredients"
        },
      },
      {
        $group: {
          _id: "$_id", // Групуємо за _id користувача (тобто документом користувача)
          favorites: { $push: "$favorites" }, // Створюємо масив улюблених рецептів з даними про інгредієнти
        },
      },
    ]);

    res.status(200).json({ favorites: favorites[0].favorites }); // Повертаємо результат у форматі JSON
  } catch (error) {
    next(error); // В разі помилки передаємо її обробникові помилок
  }
};

module.exports = { getFavorites };