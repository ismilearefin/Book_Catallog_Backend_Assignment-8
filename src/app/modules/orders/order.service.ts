import { Order, OrderedBooks } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createOrder = async(data:any,userId:string) : Promise<Order>=>{

     // Create the order
     const result = await prisma.order.create({
        data: {
          userId: userId,
          orderedBooks: {
            create: data.orderedBooks.map((item:OrderedBooks) => ({
              bookId: item.bookId,
              quantity: item.quantity,
            })),
          },
        },
        include: {
          orderedBooks: true,
        }
      });
      
    return result;
};


const getAllOrders = async():Promise<Order[]>=>{
    const result = await prisma.order.findMany({});
    return result;
}

export const OrderService = {
    createOrder,
    getAllOrders
}