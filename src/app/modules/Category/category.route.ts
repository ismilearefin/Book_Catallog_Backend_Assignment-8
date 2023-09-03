import express from 'express';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/:id',CategoryController.getCategoryById)
router.get('/', CategoryController.getAllCategory)
router.post('/create-category',auth(ENUM_USER_ROLE.ADMIN), CategoryController.categoryCreate)
router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN),CategoryController.updateCategory)
router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN),CategoryController.deleteCategory)

export const CategoryRoutes = router;