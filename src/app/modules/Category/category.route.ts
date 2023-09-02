import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/:id',CategoryController.getCategoryById)
router.get('/', CategoryController.getAllCategory)
router.post('/create-category', CategoryController.categoryCreate)
router.patch('/:id',CategoryController.updateCategory)

export const CategoryRoutes = router;