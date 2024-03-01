const productRoute = require("./routes/product.route.js");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const Product = require("./models/product.model.js");

//Middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://infoyirga12:2Cool4IT@cluster0.apn766f.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed.");
  });
