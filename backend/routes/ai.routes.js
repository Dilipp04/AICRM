import { Router } from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  aiStatus,
  generateEmailDraft,
  leadSummary,
  salesInsight,
} from "../controllers/ai.controller.js";

const router = Router();
router.use(protect);

router.get("/status", aiStatus);
router.post("/lead-summary", leadSummary);
router.post("/generate-email", generateEmailDraft);
router.post("/sales-insights", salesInsight);

export default router;
