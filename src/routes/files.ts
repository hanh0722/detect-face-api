import { Router } from "express";
import { uploadFileController } from "../controller/file";

const router = Router();

router.post('/upload', uploadFileController);

export default router;