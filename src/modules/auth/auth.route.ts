import { Router } from "express";
import { googleAuthController, verifyOtpController } from "./auth.controller";
import { refreshTokenController } from "./auth.refresh.controller";

const router = Router();

router.post("/google", googleAuthController);
router.post("/verify-otp", verifyOtpController);
router.post("/refresh-token", refreshTokenController);

export default router;
