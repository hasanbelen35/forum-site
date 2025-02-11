import express from 'express';
const routes = express.Router();
import { registerController } from '../controllers/auth/auth.ts';

// CONTROLLERS
routes.post('/register', registerController)

export default routes;