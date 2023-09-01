import express from 'express';
import { userAuthController } from './userAuth.controller';
// import auth from '../../middlewares/auth';
// import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/users/:id',userAuthController.getUserById)
router.get('/users', userAuthController.getAllUser);
router.post('/auth/signup', userAuthController.createUser);

export const userAuthRoutes = router;
