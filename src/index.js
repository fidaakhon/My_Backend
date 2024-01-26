//require("dotenv").config({ path: "./env" });
import connectDB from "./db/index.js";
import dotenv from "dotenv";  //alternative way to import 

dotenv.config({
    path: "./env"
});



connectDB();












/*

//Database connection in easy way but not professional way
import express from "express";
const app = express();
;(async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Database connected:", db.connection.name);
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();  //ifys function

*/