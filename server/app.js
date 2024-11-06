import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db.js";
import UserRoutes from "./routes/userRoutes.js";
import Authroutes from "./routes/authRoutes.js";
import cors from "cors";
const PORT = process.env.APP_PORT || 3000;
const app = express();
// Database connection
connection();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
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
