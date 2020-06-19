const { Router } = require("express");

const User = require("../models").user;
const Post = require("../models").post;

const router = new Router();

const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto: pickandpocket.info@gmail.com",
  process.env.PUBLIC_VAPID_KEY ||
    "BNcoKAr-ZNFtk7bjLstoDL5UF7ArBNJoaWqsXd8QE3fUUpdXCrGFgC4wJpT-mYX3GmGWUXULBEVhdB6JEKHDk8U",
  process.env.PRIVATE_VAPID_KEY || "a3r1bkAlf18bgyxq3pxLgDU_ABcOs4TVNV5WgkIgadc"
);

router.get("/", async (req, res, next) => {
  const userId = parseInt(req.params.id);

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
      message: "Title,description,from time and to time are required",
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

  // const subscription = req.body;

  // console.log("POST method subscription:", subscription);

  // const payload = JSON.stringify({
  //   title: "in new Post method",
  //   body: "It works.",
  // });

  // webpush
  //   .sendNotification(subscription, payload)
  //   .then((result) => console.log(result))
  //   .catch((e) => console.log(e.stack));

  return res.status(200).send({ message: "new post saved", newPost });
});

module.exports = router;
