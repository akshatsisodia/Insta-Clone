const express = require("express");
const followRouter = express.Router();
const followController = require("../controllers/follow.controller");
const identifyUser = require("../middleware/auth.middleware");


followRouter.post("/follow/:username",identifyUser,followController.followUserController)

followRouter.delete("/unfollow/:username",identifyUser, followController.unfollowUserController)

followRouter.patch("/follow/:requestId",identifyUser,followController.updateFollowStatus)


module.exports = followRouter;
