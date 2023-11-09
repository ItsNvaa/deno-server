import express from "npm:express";
const router = express.Router();
import {
  users,
  user,
  searchUsers,
} from "../controllers/user.controller.get.ts";

router.get("/", users);
router.get("/search", searchUsers);
router.get("/:id", user);

export default router;
