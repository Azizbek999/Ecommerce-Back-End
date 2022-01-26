import express from "express";
import stripe from "stripe";

const router = express.Router();

router.post("/payment", (req, res) => {
  const striped = stripe(process.env.STRIPE_KEY);
  striped.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
