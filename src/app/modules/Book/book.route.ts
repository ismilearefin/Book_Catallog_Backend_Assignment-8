import express from 'express';
import { BookController } from './book.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();



router.post('/create-book', BookController.bookCreate);
router.get('/:id', BookController.getSingleBook)
router.get('/:categoryId/category', BookController.getBooksByCategoryId)
router.patch('/:id', BookController.updateSingleBook)
router.get('/',auth(ENUM_USER_ROLE.CUSTOMER) ,BookController.getAllBooks)
router.delete('/:id', BookController.deleteBook)

export const  BookRouter = router;