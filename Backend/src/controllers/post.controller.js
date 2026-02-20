const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs/index.js");
const { toFile } = require("@imagekit/nodejs/index.js");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model");

const imageKit = ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "/posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created Successfully",
    post,
  });
}

async function gettingUserPostsController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "posts fetched successfully.",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;

  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not Found.",
    });
  }

  const isUserValid = post.user.toString() === userId;

  if (!isUserValid) {
    return res.status(403).json({
      message: "Forbidden Content.",
    });
  }

  res.status(200).json({
    message: "post fetched Successfully.",
    post,
  });
}

async function likePostController(req, res) {
  const postId = req.params.postId;
  const username = req.user.username;

  const isPostExists = await postModel.findById(postId);

  if (!isPostExists) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isAlreadyLiked = await likeModel.findOne({
    postId: postId,
    user: username,
  });

  if (isAlreadyLiked) {
    return res.status(409).json({
      message: "You already liked this post",
      likedPost: isAlreadyLiked,
    });
  }

  const like = await likeModel.create({
    postId: postId,
    user: username,
  });

  res.status(201).json({
    message: "post liked Successfully",
  });
}

module.exports = {
  createPostController,
  gettingUserPostsController,
  getPostDetailsController,
  likePostController,
};
