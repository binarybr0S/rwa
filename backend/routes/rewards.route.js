import { Router } from "express";
import { getMyRewards } from "../controllers/rewards.controller.js";

const router = Router();

router.get("/my-rewards", getMyRewards);

export { router as rewardsRouter };