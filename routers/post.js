const { Router } = require("express");
const User = require("../models").user;
const Post = require("../models").post;

const router = new Router();

router.get("/", async (req, res, next) => {
  const posts = await Post.findAll({
    include: [
      { model: User, attributes: ["email"], order: [["createdAt", "DESC"]] },
    ],
  });
  if (!posts) {
    return res.status(404).send({ message: "Posts does not exist" });
  }
  res.status(200).send(posts);
});

router.post("/", async (req, res, next) => {
  const { title, description, imageUrl, startTime, endTime, userId } = req.body;
  if (!title || !description || !startTime || !endTime) {
    return res.status(404).send({
      message: "Title,description,from date and to date are required",
    });
  }

  const newPost = await Post.create({
    title,
    category: "test",
    description,
    imageUrl,
    startTime,
    endTime,
    userId,
  });
  if (!newPost) {
    return res.status(404).send({ message: "can't add new post" });
  }
  return res.status(200).send({ message: "new post saved", newPost });
});

module.exports = router;
