import express from "express";
import {
	followUnFollowUser,
	getUserProfile,
	loginUser,
	logoutUser,
	signupUser,
	updateUser,
	getSuggestedUsers,
	freezeAccount,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/api/profile/:query", getUserProfile);
router.get("/api/suggested", protectRoute, getSuggestedUsers);
router.post("/api/signup", signupUser);
router.post("/api/login", loginUser);
router.post("/api/logout", logoutUser);
router.post("/api/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
router.put("/api/update/:id", protectRoute, updateUser);
router.put("/api/freeze", protectRoute, freezeAccount);

export default router;
