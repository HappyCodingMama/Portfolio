const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HqhrkA76YAYsT9ny0dNQsMloQ9FHnR25F1jLNgaDnJp2igfnwJ8Nv5d0NuhAt5nJYqwVhMXhd8imFIgc4Ti6mf600BmFsOSbo"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved. For this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-379c9/us-central1/api
