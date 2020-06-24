const { Router } = require("express");
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(stripeSecretKey);
const { v4: uuidv4 } = require("uuid");

const router = new Router();

router.post("/", async (request, response, next) => {
  let error;
  let status;
  try {
    const { token, title, price } = request.body;
    // Create a new customer and then create an invoice item then invoice it:
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: Math.round(price * 100),
        currency: "eur",
        customer: customer.id,
        receipt_email: token.email,
        description: `Paid for the service - ${title}`,

        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencyKey }
    );
    console.log("Charge Successful", { charge });
    status = "success";
  } catch (error) {
    console.error("Charge fail", error);
    status = "failure";
  }
  response.json({ error, status });
});

module.exports = router;
