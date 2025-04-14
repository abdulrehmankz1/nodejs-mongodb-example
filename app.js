require("dotenv").config(); // .env file ko load karta hai

const app = require("express")();
const http = require("http").createServer(app);

const mongoose = require("mongoose");

// Connect using URI from .env
mongoose.connect(process.env.MONGO_URI);

const User = require("./models/userModel");

async function insert() {
  await User.create({
    name: "Abdul Rehman",
    email: "abdulrehmankhanzada@gmail.com",
  });
}
insert();

http.listen(3000, function () {
  console.log("server is running");
});
