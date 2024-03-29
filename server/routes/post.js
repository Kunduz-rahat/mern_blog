import { Router } from 'express';
import {
  createPost,
  getAll,
  getOne,
  getMyPosts,
  updatePost,
  getPostComments,
  removePost,
} from '../controllers/post.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();


router.post('/', checkAuth, createPost);
router.get('/comments/:id', getPostComments);
router.get('/', getAll);
router.get('/:id', getOne);
router.get('/user/me', checkAuth, getMyPosts);
router.delete('/:id', checkAuth, removePost);
router.put('/:id', checkAuth, updatePost);


export default router;
