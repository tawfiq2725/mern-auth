import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connection = async () => {
  try {
    let mongoString = process.env.MONGO_URL;
    await mongoose.connect(mongoString);
    console.log("Connected successfully");
  } catch (error) {
    console.log("Something wrong" + error);
  }
};

export default connection;
