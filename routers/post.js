const { Router } = require("express");
const Sequelize = require("sequelize");
const auth = require("../auth/middleware");
const User = require("../models").user;
const Post = require("../models").post;

const router = new Router();

let localSocket;
const socket = (io) => {
  localSocket = io;

  io.on("connection", (client) => {
    console.log("New Connection in Post");

    // socket event for client subscription
    client.on("subscribeToNewPost", (interval) => {
      console.log(
        "Client is subscribing with interval for updates: ",
        interval
      );

      // emit message to the client side
      // setInterval(() => {
      //   client.emit("getPost", "There are new Posts");
      // }, interval);
    });
  });
};

router.post("/", auth, async (req, res, next) => {
  const {
    title,
    description,
    imageUrl,
    startTime,
    endTime,
    latitude,
    longitude,
    userId,
  } = req.body;
  const status = "New";

  if (!title || !description || !startTime || !endTime) {
    return res.status(404).send({
      message: "Title,description,from-time and to-time are required",
    });
  }

  const newPost = await Post.create({
    title,
    description,
    imageUrl,
    startTime,
    endTime,
    status,
    latitude,
    longitude,
    userId,
  });

  if (!newPost) {
    return res.status(404).send({ message: "Cannot create new post" });
  }

  //console.log("Requesting emit to client:", req);
  // setInterval(() => {
  //   req.app.emit("getPost", "There are new Posts");
  // }, newPost);

  localSocket.emit("getPost", newPost.dataValues);

  return res.status(200).send({ message: "new post saved", newPost });
});

//console.log("Post status:", status);

router.get("/", async (req, res, next) => {
  console.log("request in GET:", req.user);

  const posts = await Post.findAll({
    where: { status: { [Sequelize.Op.not]: "Completed" } },
    include: [
      { model: User, attributes: ["email"], order: [["createdAt", "DESC"]] },
    ],
  });
  if (!posts) {
    return res.status(404).send({ message: "Posts does not exist" });
  }
  res.status(200).send(posts);
});

module.exports = { socket, router };
