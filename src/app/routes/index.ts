import express from 'express';
import { userAuthRoutes } from '../modules/userAuth/userAuth.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    routes: userAuthRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
