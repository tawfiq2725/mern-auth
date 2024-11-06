import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db.js";
import UserRoutes from "./routes/userRoutes.js";
import Authroutes from "./routes/authRoutes.js";
import { error } from "console";
const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());

// Database connection
connection();

app.use((err, req, res, next) => {
  const statusCode = err.statusCode;
  const message = err.message;
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.use("/", UserRoutes);
app.use("/auth", Authroutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} -> http://localhost:${PORT}`);
});
