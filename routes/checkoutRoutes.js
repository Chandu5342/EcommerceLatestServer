import express from "express";
import { checkout } from "../controllers/checkoutController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, checkout);

export default router;
