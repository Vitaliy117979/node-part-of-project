// working with contacts

const { updateUserInformation } = require("./auth/updateUserInformation");
const { login } = require("./auth/userLogin");
const { register } = require("./auth/userRegister");
const getCurrent = require("./auth/getCurrent");
const logout = require("./auth/logout");
const { ctrlWrapper } = require("../helpers");
const { updateSubscription } = require("./subscribe/subscribe");
const { searchByTitle } = require("./search/searchByTitle");


const getRecipesList = require("./recipes/getRecipes")
const getCategoryList = require("./recipes/getCategoryList")
const getRecipesByCategory = require("./recipes/getRecipesByCategory")
const getRecipesById = require("./recipes/getRecipeById")
const {getRecipesForMainPage} = require("./recipes/getRecipesForMain")
module.exports = {
  searchByTitle: ctrlWrapper(searchByTitle),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateUserInformation: ctrlWrapper(updateUserInformation),
  updateSubscription: ctrlWrapper(updateSubscription),

  getRecipesList: ctrlWrapper(getRecipesList),
  getCategoryList: ctrlWrapper(getCategoryList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipesById: ctrlWrapper(getRecipesById),
  getRecipesForMainPage: ctrlWrapper(getRecipesForMainPage),
};
