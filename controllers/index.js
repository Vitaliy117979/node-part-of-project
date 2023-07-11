// working with contacts

const { updateUserInformation } = require("./auth/updateUserInformation");
const { login } = require("./auth/userLogin");
const { register } = require("./auth/userRegister");
const getCurrent = require("./auth/getCurrent");
const logout = require("./auth/logout");
const { ctrlWrapper } = require("../helpers");
const { updateSubscription } = require("./subscribe/subscribe");
const { searchByTitle } = require("./search/searchByTitle");

module.exports = {
  searchByTitle: ctrlWrapper(searchByTitle),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateUserInformation: ctrlWrapper(updateUserInformation),
  updateSubscription: ctrlWrapper(updateSubscription),
};
