import express from "express";
import { signup } from "../controllers/authController.js";
const routes = express.Router();

routes.post("/signup", signup);

export default routes;
