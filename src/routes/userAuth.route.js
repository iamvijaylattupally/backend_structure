import {Router} from "express";
import {registerUser} from "../controllers/userauth.controller.js";



const router = Router();

router.route("/register").post(registerUser);



export default router;