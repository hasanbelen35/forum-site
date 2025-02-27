import express from 'express';
const routes = express.Router();
import { registerController } from '../controllers/auth/auth.ts';
import { loginController } from '../controllers/auth/auth.ts';
import { getAccessToRoute } from '../middleware/auth/authMiddleware.ts';
import { logoutController } from '../controllers/auth/auth.ts';
import { createPostController, getPostsByUserController } from '../controllers/post/post.ts';
//import { checkPostOwner } from '../middleware/post/postMiddleware.ts'
import { getAllPostsController } from '../controllers/post/post.ts';
import { getUserMeController } from '../controllers/user/user.ts';
import { editUserMeController } from '../controllers/user/user.ts';
import { me } from '../controllers/user/me.ts';

//import { getPaginatedPostsController } from '../controllers/post/post.ts';
// CONTROLLERS
routes.post('/register', registerController);
routes.post('/login', loginController);
routes.get('/logout', logoutController);
routes.post('/new-post', getAccessToRoute, createPostController);
routes.post('/update-post', getAccessToRoute, createPostController);
routes.get('/get-all-posts', getAccessToRoute, getAllPostsController);
routes.get('/getUserMe', getAccessToRoute, getUserMeController);
routes.put('/editUserMe', getAccessToRoute, editUserMeController);
//routes.get("/posts", getPaginatedPostsController); 
routes.get('/getPostsByUserId', getAccessToRoute, getPostsByUserController);

routes.get('/me', getAccessToRoute, me)
export default routes;