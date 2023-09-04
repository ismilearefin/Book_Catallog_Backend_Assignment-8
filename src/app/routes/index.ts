import { OrderRouter } from './../modules/orders/order.route';
import express from 'express';
import { userAuthRoutes } from '../modules/userAuth/userAuth.route';
import { CategoryRoutes } from '../modules/Category/category.route';
import { BookRouter } from '../modules/Book/book.route';
import { getCustomerProfileRoute } from '../modules/ProfileInfo/profileInfo.router';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/",
    routes: userAuthRoutes
  },
  {
    path: "/categories",
    routes: CategoryRoutes
  },
  {
    path: "/books",
    routes: BookRouter
  },
  {
    path: "/orders",
    routes: OrderRouter
  },
  {
    path: "/profile",
    routes: getCustomerProfileRoute
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
