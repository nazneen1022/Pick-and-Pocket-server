const { Router } = require("express");
const dotenv = require("dotenv");
// const bodyParser = require('body-parser')
// const cors = require('cors')
const webpush = require("web-push");

const router = new Router();

dotenv.config();

// app.use(cors())
// app.use(bodyParser.json())

webpush.setVapidDetails(
  "mailto: pickandpocket.info@gmail.com",
  process.env.PUBLIC_VAPID_KEY ||
    "BNcoKAr-ZNFtk7bjLstoDL5UF7ArBNJoaWqsXd8QE3fUUpdXCrGFgC4wJpT-mYX3GmGWUXULBEVhdB6JEKHDk8U",
  process.env.PRIVATE_VAPID_KEY || "a3r1bkAlf18bgyxq3pxLgDU_ABcOs4TVNV5WgkIgadc"
);

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.post("/notifications/subscribe", (req, res) => {
  const subscription = req.body;

  console.log("subscription:", subscription);

  const payload = JSON.stringify({
    title: "Hello! testing",
    body: "It works.",
  });

  webpush
    .sendNotification(subscription, payload)
    .then((result) => console.log(result))
    .catch((e) => console.log(e.stack));

  res.status(200).json({ success: true });
});

module.exports = router;
