import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderService } from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createOrder = catchAsync(async(req: Request, res: Response)=>{
    const user = ( req as any).user
    // // {
    // //     userId: 'a1716594-3b2c-43e8-9ad3-11f39ac52b9b',
    // //     role: 'customer',
    // //     iat: 1693813882,
    // //     exp: 1693900282
    // //   }
    console.log(user.userId)
    const result = await OrderService.createOrder(req.body,user.userId);

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Order created successfully",
        data:result
    })
});

export const OrderController ={
    createOrder
}