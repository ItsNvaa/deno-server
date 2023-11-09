import express from "npm:express";
const router = express.Router();
import { users } from "../controllers/user.controller.get.ts";

router.get("/", users);

export default router;
