import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/:id',CategoryController.getCategoryById)
router.get('/', CategoryController.getAllCategory)
router.post('/create-category', CategoryController.categoryCreate)

export const CategoryRoutes = router;