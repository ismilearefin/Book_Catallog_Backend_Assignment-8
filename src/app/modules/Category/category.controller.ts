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
const getAllCategory = catchAsync(async(req:Request,res:Response)=>{
    const result = await CategoryService.getAllCategory();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"Categories fetched successfully",
        data:result
    });
})

const getCategoryById = catchAsync(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const result = await CategoryService.getCategoryById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Category fetched successfully",
        data:result
    })
})

const updateCategory = catchAsync(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const result = await CategoryService.updateCategory(id,req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"Category updated successfully",
        data:result
    })
})

const deleteCategory = catchAsync(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const result = await CategoryService.deleteCategory(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category deleted successfully',
        data: result,
    })
})

export const CategoryController = {
    categoryCreate,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}