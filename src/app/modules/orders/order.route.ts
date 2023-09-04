import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';



const router = express.Router();

router.get('/',auth(ENUM_USER_ROLE.CUSTOMER,ENUM_USER_ROLE.ADMIN),OrderController.getAllOrders) 
router.get('/:id',auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.CUSTOMER),OrderController.getSingleorderById)
router.post('/create-order',auth(ENUM_USER_ROLE.CUSTOMER), OrderController.createOrder)

export const OrderRouter = router;