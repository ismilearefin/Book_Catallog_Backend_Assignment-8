import express from 'express';
import { userAuthRoutes } from '../modules/userAuth/userAuth.route';
import { CategoryRoutes } from '../modules/Category/category.route';

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
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
