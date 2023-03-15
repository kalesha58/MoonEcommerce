import express from "express"
const router=express.Router()
import {loginController, registerController, testController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
export default router