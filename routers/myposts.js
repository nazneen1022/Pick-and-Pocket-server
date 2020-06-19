const { Router } = require("express");

const User = require("../models").user;
const Post = require("../models").post;

const router = new Router();

router.get("/:userId/posts", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  if (!userId) {
    return res.status(401).send({ message: "Invalid User Id" });
  }
  const posts = await Post.findAll({
    where: { userId: userId },
    include: [
      { model: User, attributes: ["email"], order: [["createdAt", "DESC"]] },
    ],
  });
  if (!posts) {
    return res.status(404).send({ message: "Posts does not exist" });
  }
  res.status(200).send(posts);
});

module.exports = router;
