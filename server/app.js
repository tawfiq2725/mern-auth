import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db.js";
const PORT = process.env.APP_PORT || 3000;
const app = express();

// Database connection
connection();

app.get("/", (req, res) => {
  res.send("checking");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} -> http://localhost:${PORT}`);
});
