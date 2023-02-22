import express from 'express'

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);       //to edit we need the id
router.delete('/:id', deletePost);

export default router;