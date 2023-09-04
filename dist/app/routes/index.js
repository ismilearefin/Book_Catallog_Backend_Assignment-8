"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_route_1 = require("./../modules/orders/order.route");
const express_1 = __importDefault(require("express"));
const userAuth_route_1 = require("../modules/userAuth/userAuth.route");
const category_route_1 = require("../modules/Category/category.route");
const book_route_1 = require("../modules/Book/book.route");
const profileInfo_router_1 = require("../modules/ProfileInfo/profileInfo.router");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/",
        routes: userAuth_route_1.userAuthRoutes
    },
    {
        path: "/categories",
        routes: category_route_1.CategoryRoutes
    },
    {
        path: "/books",
        routes: book_route_1.BookRouter
    },
    {
        path: "/orders",
        routes: order_route_1.OrderRouter
    },
    {
        path: "/profile",
        routes: profileInfo_router_1.getCustomerProfileRoute
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
