const { Router } = require("express");

const router = new Router();

const nodemailer = require("../lib/nodemailer");

async function sendMailNotification(userEmail, userName, message) {
  try {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // in order for this to work, the user MUST allow "Less secure app" AND disable two-step verification on Google Account
        user: "pickandpocket.info@gmail.com", // gmail
        pass: "pickandpocketservice$$", // password
      },
    });

    // Message object
    let mailOptions = {
      from: "pickandpocket.info@gmail.com",

      // Comma separated list of recipients
      to: `${userEmail}`,
      bcc: "nazneen1022@gmail.com",

      // Subject of the message
      subject: `Hello!! ${userName}, I am available to help you.`,

      // plaintext body
      text: `${message}`,
    };

    await transporter.sendMail(mailOptions, function (error, data) {
      if (error) {
        console.log("Error occured", error);
      } else {
        console.log("Email sent!", data);
      }
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

router.post("/sendMail", async (req, res, next) => {
  const { userEmail, userName, message } = req.body;
  try {
    sendMailNotification(userEmail, userName, message);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
