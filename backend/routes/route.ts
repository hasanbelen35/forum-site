import express from 'express';
const routes = express.Router();
import { registerController } from '../controllers/auth/auth.ts';
import { loginController } from '../controllers/auth/auth.ts';
import { getAccessToRoute } from '../middleware/auth/authMiddleware.ts';
import { profileController } from '../controllers/auth/auth.ts';
import { logoutController } from '../controllers/auth/auth.ts';
// CONTROLLERS
routes.post('/register', registerController);
routes.post('/login', loginController);
routes.get('/logout', logoutController);

routes.get('/profile', getAccessToRoute, profileController);
export default routes;