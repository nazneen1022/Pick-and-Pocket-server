const express = require("express");

const app = express();

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

require("dotenv").config();

//console.log("process.env:", process.env);

const loggerMiddleWare = require("morgan");
app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
//app.use(corsMiddleWare());
app.use(
  corsMiddleWare({
    credentials: true,
    origin: "http://localhost:3000", // URL of the react (Frontend) app
  })
);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

const authMiddleWare = require("./auth/middleware");

// GET endpoint for testing purposes, can be removed
app.get("/", async (req, res) => {
  res.send("Hi from express");
});

const authRouter = require("./routers/auth");
app.use("/", authRouter);

const postRouter = require("./routers/post").router;
app.use("/posts", postRouter);

const myPostsRouter = require("./routers/myposts");
app.use("/user", myPostsRouter);

const mailRouter = require("./routers/sendMail");
app.use("/sendMail", authMiddleWare, mailRouter);

const paymentRouter = require("./routers/payment");
app.use("/payment", paymentRouter);

// const pushNotificationRouter = require("./routers/notification");
// app.use("/", pushNotificationRouter);

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// attach socket to the node server
const io = require("socket.io").listen(server);
//require("./socket")(io);

require("./routers/post").socket(io);
