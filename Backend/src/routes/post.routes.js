const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage:storage});
const identifyUser = require("../middleware/auth.middleware");

postRouter.post("/",upload.single("postImage"),identifyUser,postController.createPostController)

postRouter.get("/",identifyUser, postController.gettingUserPostsController)

postRouter.get("/details/:postId",identifyUser, postController.getPostDetailsController)

postRouter.post("/like/:postId",identifyUser, postController.likePostController);

postRouter.post("/unlike/:postId",identifyUser, postController.unLikePostController);

postRouter.get("/feed",identifyUser, postController.getFeedController);

module.exports = postRouter;

