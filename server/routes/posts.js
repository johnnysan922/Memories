import express from 'express'

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id');       //to edit we need the id


export default router;