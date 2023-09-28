import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { userAuthService } from './userAuth.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ILoginUserResponse } from './userAuth.interface';
import config from '../../../config';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userAuthService.createUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  
  const result = await userAuthService.loginUser(req.body);
  const { refreshToken, ...others } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'User signin successfully! 100',
    token:others?.token
  });
});


const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userAuthService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All user fetched successfully',
    data: result,
  });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userAuthService.getUserById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userAuthService.updateUser(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const result = await userAuthService.deleteUser(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'User Deleted successfully',
        data: result,
    })
})

export const userAuthController = {
  createUser,
  loginUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser
};
