import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getMessages, sendMessage, getConversations } from "../controllers/messageController.js";

const router = express.Router();

router.get("/api/conversations", protectRoute, getConversations);
router.get("/api/:otherUserId", protectRoute, getMessages);
router.post("/api/", protectRoute, sendMessage);

export default router;
