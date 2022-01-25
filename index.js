// import * as path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routers/user.js";
import authRoute from "./routers/auth.js";
import productRoute from "./routers/product.js";
import cartRoute from "./routers/cart.js";
import orderRoute from "./routers/order.js";
import stripeRoute from "./routers/stripe.js";

// Load config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
const port = process.env.PORT | 5000;

app.use(express.json());

app.use(cors());

// router
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
