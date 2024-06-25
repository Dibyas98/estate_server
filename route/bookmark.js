import express from "express";
import bookmarkFunc from "../control/bookmark.js";
import { verifyToken } from "../utils/verifytoken.js";

const router = express.Router();

router.delete('/:id',verifyToken,bookmarkFunc)

export default router;