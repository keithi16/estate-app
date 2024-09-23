import express from "express";
import { verifyToken } from "../middleware/verifyToken";
import { shoulBeLoggedIn, shouldBeAdmin } from "../controllers/test.controller";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shoulBeLoggedIn);

router.get("/shoud-be-admin", shouldBeAdmin);

export default router;