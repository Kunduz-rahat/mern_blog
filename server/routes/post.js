import { Router } from "express";
import { createPost, getAll, getOne } from "../controllers/post";
import { checkAuth } from "../utils/checkAuth";

const router = new Router()


router.post('/', checkAuth, createPost)
router.get('/', getAll)
router.get('/:id', getOne)