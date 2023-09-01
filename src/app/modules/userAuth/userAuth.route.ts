import express from 'express';
import { userAuthController } from './userAuth.controller';

const router = express.Router();

router.post('/signup',userAuthController.createUser);

export const userAuthRoutes = router;