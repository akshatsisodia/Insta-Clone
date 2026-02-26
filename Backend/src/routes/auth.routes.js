const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const identifyUser = require("../middleware/auth.middleware");
const limitApiRequest = require("../middleware/rateLimiter");

authRouter.post("/register",limitApiRequest , authController.userRegisterController)

authRouter.post("/login",limitApiRequest , authController.userLoginController)

authRouter.get("/get-me",identifyUser, authController.getMeController)

module.exports = authRouter;
