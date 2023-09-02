import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();



router.post('/create-book', BookController.bookCreate);
router.get('/:id', BookController.getSingleBook)
router.get('/:categoryId/category', BookController.getBooksByCategoryId)
router.get('/', BookController.getAllBooks)

export const  BookRouter = router;