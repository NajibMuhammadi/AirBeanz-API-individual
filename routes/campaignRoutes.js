import { Router } from "express";

import CampaignController from "../controllers/campaignController.js";
import authMiddleware from '../middleware/authentication.js';
import validateMiddleware from '../middleware/validation.js';

const router = Router();

const controller = new CampaignController();

router.get("/",
    authMiddleware.checkUser,
    validateMiddleware.users.isAdmin,
    controller.getAllCampaigns);
router.post("/addcampaign",
    authMiddleware.checkUserStrict,
    validateMiddleware.users.isAdmin,
    validateMiddleware.products.addNewCampaign,
    controller.addNewCampaign);
router.delete("/:id",
    authMiddleware.checkUserStrict,
    validateMiddleware.users.isAdmin,
    controller.deleteCampaign);

export default router;