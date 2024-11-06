import express from "express";
import { signin, signup } from "../controllers/authController.js";
const routes = express.Router();

routes.post("/signup", signup);
routes.post("/signin", signin);

export default routes;
