import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createOrder = async(data:Order) : Promise<Order>=>{
    const result = await prisma.order.create({
        data
    });
    return result;
}