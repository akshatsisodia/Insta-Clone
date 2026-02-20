const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const identifyUser = require("../middleware/auth.middleware");

authRouter.post("/register", authController.userRegisterController)

authRouter.post("/login", authController.userLoginController)

authRouter.get("/get-me",identifyUser, authController.getMeController)

module.exports = authRouter;
