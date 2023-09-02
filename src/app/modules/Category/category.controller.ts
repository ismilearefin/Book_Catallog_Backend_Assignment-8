import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CategoryService } from "./category.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const categoryCreate = catchAsync(async(req:Request,res:Response)=>{
    const result = await CategoryService.categoryCreate(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"Category created successfully",
        data:result
    });
})

export const CategoryController = {
    categoryCreate
}