import express from "express";
import {
	createPost,
	deletePost,
	getPost,
	likeUnlikePost,
	replyToPost,
	getFeedPosts,
	getUserPosts,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/api/feed", protectRoute, getFeedPosts);
router.get("/api/:id", getPost);
router.get("/api/user/:username", getUserPosts);
router.post("/api/create", protectRoute, createPost);
router.delete("/api/:id", protectRoute, deletePost);
router.put("/api/like/:id", protectRoute, likeUnlikePost);
router.put("/api/reply/:id", protectRoute, replyToPost);

export default router;
