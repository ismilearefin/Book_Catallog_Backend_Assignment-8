import express from 'express';
import { userAuthController } from './userAuth.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/users/:id',auth(ENUM_USER_ROLE.ADMIN),userAuthController.getUserById)
router.get('/users',auth(ENUM_USER_ROLE.ADMIN) ,userAuthController.getAllUser);
router.post('/auth/signup', userAuthController.createUser);
router.post('/auth/signin', userAuthController.loginUser);
router.patch('/users/:id',auth(ENUM_USER_ROLE.ADMIN), userAuthController.updateUser);
router.delete('/users/:id',auth(ENUM_USER_ROLE.ADMIN), userAuthController.deleteUser);

export const userAuthRoutes = router;
