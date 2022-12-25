import { Router } from "express";
import { 
	createPost, 
	getAll, 
	getOne, 
	getMyPosts,
	updatePost,
removePost } from "../controllers/post";
import { checkAuth } from "../utils/checkAuth";

const router = new Router()


router.post('/', checkAuth, createPost)
router.get('/', getAll)
router.get('/:id', getOne)
router.get('/user/me', checkAuth, getMyPosts)
router.delete('/:id', checkAuth,  removePost)
router.put('/:id', checkAuth, updatePost)