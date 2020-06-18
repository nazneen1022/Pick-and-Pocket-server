const { Router } = require("express");
const nodemailer = require("nodemailer");
const authMiddleWare = require("../auth/middleware");

const router = new Router();

router.post("/", authMiddleWare, async (req, res, next) => {
  const { userEmail, userName, message } = req.body;
  try {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // in order for this to work, the user MUST allow "Less secure app" AND disable two-step verification on Google Account
        user: "pickandpocket.info@gmail.com", // gmail
        pass: "MomDad$$", // password
      },
    });

    // Message object
    let mailOptions = {
      from: "pickandpocket.info@gmail.com",

      // Comma separated list of recipients
      // to: `${userEmail}`,
      to: "vishstock12@gmail.com",

      // Subject of the message
      subject: `Hello!! ${userName}, I am available to help you.`,

      // plaintext body
      text: `${message}`,
    };

    transporter.sendMail(mailOptions, function (error, data) {
      if (error) {
        console.log("Error occured", error);
      } else {
        console.log("Email sent!");
      }
    });
    res.status(200).send({ message: "Sending email success!!" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
