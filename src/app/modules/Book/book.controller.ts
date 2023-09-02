
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { booksFilterableFields } from "./book.constants";

const bookCreate = catchAsync(async(req:Request,res:Response)=>{
    const result = await BookService.bookCreate(req.body);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Book created successfully",
        data:result
    })

});

const getAllBooks = catchAsync(async(req:Request,res:Response)=>{
    const filters = pick(req.query, booksFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await BookService.getAllBooks(filters, options);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Books fetched successfully",
        meta:result.meta,
        data:result.data
    })
});

const getBooksByCategoryId = catchAsync(async(req:Request, res:Response)=>{
    const {categoryId} = req.params;
    const result = await BookService.getBooksByCategoryId(categoryId);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Books with associated category data fetched successfully",
        data:result
    })
});

export const BookController ={
    bookCreate,
    getAllBooks,
    getBooksByCategoryId
}