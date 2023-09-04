import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { getCustomerProfileService } from "./profileInfo.service";

const getCustomerProfileData = catchAsync(async(req: Request, res: Response)=>{
    const user = (req as any).user;
    const result = await getCustomerProfileService.getCustomerProfileData(user);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Profile Info fetched successfully",
        data:result
    })
});

export const getCustomerProfileController ={
    getCustomerProfileData
}