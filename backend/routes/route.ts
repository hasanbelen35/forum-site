import express from 'express';
const routes = express.Router();
import { registerController } from '../controllers/auth/auth.ts';
import { loginController } from '../controllers/auth/auth.ts';

// CONTROLLERS
routes.post('/register', registerController)
routes.post('/login', loginController)

export default routes;