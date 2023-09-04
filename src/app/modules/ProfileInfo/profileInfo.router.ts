import express from 'express';
import { getCustomerProfileController } from './profileInfo.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';


const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.CUSTOMER,ENUM_USER_ROLE.ADMIN),getCustomerProfileController.getCustomerProfileData)

export const getCustomerProfileRoute = router;