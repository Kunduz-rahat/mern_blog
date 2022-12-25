import { Router } from "express";
import { createPost } from "../controllers/post";
import { checkAuth } from "../utils/checkAuth";

const router = new Router()


router.post('/', checkAuth, createPost)