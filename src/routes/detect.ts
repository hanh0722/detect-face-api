import { Router } from "express";
import { DetectAllController } from "../controller";

const router = Router();

router.post('/face', DetectAllController);

export default router;