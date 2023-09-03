import express from 'express';
import { BookController } from './book.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();



router.post('/create-book',auth(ENUM_USER_ROLE.ADMIN), BookController.bookCreate);
router.get('/:id', BookController.getSingleBook)
router.get('/:categoryId/category', BookController.getBooksByCategoryId)
router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN), BookController.updateSingleBook)
router.get('/' ,BookController.getAllBooks)
router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook)

export const  BookRouter = router;