import { Router } from "express";
import { getuser, createuser, updateuser, deleteuser } from "../controllers/login.controller.js";

const router = Router();

router.get("/getUsers", getuser);
router.post("/login", createuser);
router.put("/login/:id", updateuser);
router.delete("/login/:id", deleteuser);

export default router