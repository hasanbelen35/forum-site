import express from 'express';
const routes = express.Router();
import { registerController } from '../controllers/auth/auth.ts';
import { loginController } from '../controllers/auth/auth.ts';
import { getAccessToRoute } from '../middleware/auth/authMiddleware.ts';
import { profileController } from '../controllers/auth/auth.ts';
import { logoutController } from '../controllers/auth/auth.ts';
import { createPostController } from '../controllers/post/post.ts';
import { checkPostOwner } from '../middleware/post/postMiddleware.ts'
// CONTROLLERS
routes.post('/register', registerController);
routes.post('/login', loginController);
routes.get('/logout', logoutController);
routes.get('/profile', getAccessToRoute, profileController);
routes.post('/new-post', getAccessToRoute, createPostController);
routes.post('/update-post', getAccessToRoute, createPostController);

export default routes;