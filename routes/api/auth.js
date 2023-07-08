const express = require("express");
const schemas = require("../../schemas");
const {authenticate, validate, upload} = require("../../middleware");
const {  register, login, getCurrent, logout, updateUserInformation } = require("../../controllers");
const router = express.Router();





router.post("/register", validate(schemas.registerSchema), register);
router.post("/login", validate(schemas.loginSchema), login);
router.get("/current", authenticate, getCurrent)
router.post("/logout", authenticate, logout)
router.patch("/updateUser", upload.single("avatarURL") ,authenticate, updateUserInformation)




module.exports = router;
