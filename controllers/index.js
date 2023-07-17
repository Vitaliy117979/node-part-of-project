const { updateUserInformation } = require("./auth/updateUserInformation");
const { login } = require("./auth/userLogin");
const { register } = require("./auth/userRegister");
const getCurrent = require("./auth/getCurrent");
const logout = require("./auth/logout");
const { ctrlWrapper } = require("../helpers");
const { updateSubscription } = require("./subscribe/subscribe");
const { searchByTitle } = require("./search/searchByTitle");

const getCategoryList = require("./recipes/getCategoryList");
const getRecipesByCategory = require("./recipes/getRecipesByCategory");
const getRecipesById = require("./recipes/getRecipeById");
const { getRecipesForMainPage } = require("./recipes/getRecipesForMain");
const { getListOfIngredients } = require("./ingredients/ingredientsList");
const { searchByIngredient } = require("./search/searchByIngredient");
const getPopularRecipe = require("./recipes/getPopularRecipe");
const { createRecipes } = require("./ownRecipes/createRecipes");
const { getCreatedRecipes } = require("./ownRecipes/getCreatedRecipes");
const { deleteOwnRecipes } = require("./ownRecipes/deleteOwnRecipes");

const { addToFavorites } = require("./favorites/addToFavorites");
const { getFavorites } = require("./favorites/getFavorites");
const { deleteFavorites } = require("./favorites/deleteFavorites");

const { searchIngredients } = require("./search/searchIngredients");
const getShoppingList = require("./shoppingList/getShoppingList");
const addProductToShoppingList = require("./shoppingList/addProductToShoppingList");
const deleteProductFromShoppingList = require("./shoppingList/deleteProductFromShoppingList");

module.exports = {
  searchByTitle: ctrlWrapper(searchByTitle),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateUserInformation: ctrlWrapper(updateUserInformation),
  updateSubscription: ctrlWrapper(updateSubscription),

  getCategoryList: ctrlWrapper(getCategoryList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipesById: ctrlWrapper(getRecipesById),
  getRecipesForMainPage: ctrlWrapper(getRecipesForMainPage),
  getPopularRecipe: ctrlWrapper(getPopularRecipe),
  createRecipes: ctrlWrapper(createRecipes),
  getCreatedRecipes: ctrlWrapper(getCreatedRecipes),
  deleteOwnRecipes: ctrlWrapper(deleteOwnRecipes),

  addToFavorites: ctrlWrapper(addToFavorites),
  getFavorites: ctrlWrapper(getFavorites),
  deleteFavorites: ctrlWrapper(deleteFavorites),

  getListOfIngredients: ctrlWrapper(getListOfIngredients),
  searchByIngredient: ctrlWrapper(searchByIngredient),

  getShoppingList: ctrlWrapper(getShoppingList),
  addProductToShoppingList: ctrlWrapper(addProductToShoppingList),
  searchIngredients: ctrlWrapper(searchIngredients),
  deleteProductFromShoppingList: ctrlWrapper(deleteProductFromShoppingList),
};
