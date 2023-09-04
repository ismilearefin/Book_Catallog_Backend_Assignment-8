import { OrderedBooks } from '@prisma/client';
import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';


const createOrder = async (data: any, userId: string): Promise<Order> => {
  // Create the order
  const result = await prisma.order.create({
    data: {
      userId: userId,
      orderedBooks: {
        create: data.orderedBooks.map((item: OrderedBooks) => ({
          bookId: item.bookId,
          quantity: item.quantity,
        })),
      },
    },
    include: {
      orderedBooks: true,
    },
  });

  return result;
};

const getAllOrders = async (user: any): Promise<Order[]> => {
  let query = {};

  if (user.role === 'customer') {
    query = {
      where: {
        userId: user.userId,
      },
      include: {
        orderedBooks: true,
      }
    };
  } else {
    query = {
        select:{
            OrderedBooks:true
        }
    };
  }
  const result = await prisma.order.findMany(query);

  return result;
};


const getSingleorderById =async (id:string,user:any):Promise<Order | null> => {
    console.log(user)
    const result = await prisma.order.findUnique({
        where:{
            id
        },
        include: {
          orderedBooks: true,
        }
    });
    
    if(!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'No result found');
     }

    if(user.role !== 'admin') {
      if(result.userId !== user.userId){
        throw new ApiError(httpStatus.BAD_REQUEST,"No result found for you");
    }
    }

    return result;
};




export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleorderById,
 
};
