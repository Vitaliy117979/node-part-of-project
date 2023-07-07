// working with contacts
const getContactsList = require("./contacts/getContactsList");
const getContactById = require("./contacts/getContactById");
const putContactFildFavorite = require("./contacts/putContactFildFavorite");
const postContact = require("./contacts/postContact");
const putContact = require("./contacts/putContact");
const deleteContact = require("./contacts/deleteContact");
const {updataAvatar} = require("./auth/updataAvatar")
const { login } = require("./auth/userLogin");
const { register } = require("./auth/userRegister");
const getCurrent = require("./auth/getCurrent")
const logout = require("./auth/logout")
const {ctrlWrapper} = require("../helpers")
module.exports = {
  getContactsList: ctrlWrapper(getContactsList),
  getContactById: ctrlWrapper(getContactById),
  putContactFildFavorite: ctrlWrapper(putContactFildFavorite),
  postContact: ctrlWrapper(postContact),
  putContact: ctrlWrapper(putContact),
  deleteContact: ctrlWrapper(deleteContact),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updataAvatar: ctrlWrapper(updataAvatar)
};
