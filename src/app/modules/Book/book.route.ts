import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/:categoryId', BookController.getBooksByCategoryId)
router.get('/', BookController.getAllBooks)
router.post('/create-book', BookController.bookCreate);

export const  BookRouter = router;