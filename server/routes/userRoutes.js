import express from "express";
import { testRoute } from "../controllers/userController.js";
const routes = express.Router();

routes.get("/", testRoute);

export default routes;
