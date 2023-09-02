import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const bookCreate = catchAsync(async(req:Request,res:Response)=>{
    const result = await BookService.bookCreate(req.body);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Book created successfully",
        data:result
    })

});

export const BookController ={
    bookCreate
}