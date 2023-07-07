const express = require("express");
const schemas = require("../../schemas");
const {authenticate, validate, upload} = require("../../middleware");
const {  register, login, getCurrent, logout, updataAvatar } = require("../../controllers");
const router = express.Router();





router.post("/register",upload.single("avatarURL"), validate(schemas.registerSchema), register);
router.post("/login", validate(schemas.loginSchema), login);
router.get("/current", authenticate, getCurrent)
router.post("/logout", authenticate, logout)
router.patch("/avatars",upload.single("avatarURL"), authenticate, updataAvatar)




module.exports = router;
