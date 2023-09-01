import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { userAuthService } from "./userAuth.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



const createUser = catchAsync(async (req:Request,res:Response)=>{
    const result = await userAuthService.createUser(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:'User created successfully',
        data: result
    })
});

export const userAuthController = {
    createUser
}