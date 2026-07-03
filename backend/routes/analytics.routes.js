import { Router } from "express";
import { getOverView } from "../controllers/analytics.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router();
router.use(protect);
router.get("/overview", getOverView);

export default router;
