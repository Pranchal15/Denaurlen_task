import express from "express";
import * as PostsController from "../controllers/posts"

const router = express.Router()

router.get("/",PostsController.getPosts);
router.patch("/:postId",PostsController.valuationProcess)

export default router