import { Router } from "express";
import { getMyUserProfile, updateUser, getUserProfileById } from "../controllers/users.controller.js";

const router = Router();

router.get('/me', getMyUserProfile);
router.get('/:id', getUserProfileById);
router.put('/', updateUser);

export {router as usersRouter };