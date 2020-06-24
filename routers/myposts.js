const { Router } = require("express");
const auth = require("../auth/middleware");
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

router.patch("/:userId/posts/:id", auth, async (req, res, next) => {
  //const postId = parseInt(req.params.id);
  try {
    const post = await Post.findByPk(req.params.id);
    //console.log("req.user.id:", req.user.id);
    if (!post.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this post" });
    }

    const { status } = req.body;

    await post.update({ status });

    return res.status(200).send({ post });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
