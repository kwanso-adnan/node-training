//@ts-check
import { Router } from "express";
import commentsController from "./comment.controller";

const router = Router();

router.get("/", commentsController.get);

export default router;
