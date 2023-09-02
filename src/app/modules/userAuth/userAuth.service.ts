// import { Secret } from 'jsonwebtoken';
import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import bcrypt from 'bcrypt';
import config from '../../../config';
// import { jwtHelpers } from '../../../helpers/jwtHelpers';

const createUser = async (data: User): Promise<User> => {
  //create access token & refresh token
  //     const accessToken = jwtHelpers.createToken({role:data.role}, config.jwt.secret as Secret ,config.jwt.expires_in as string )
  //     const refreshToken = jwtHelpers.createToken({role:data.role}, config.jwt.refresh_secret as Secret ,config.jwt.refresh_expires_in as string )
  // console.log(accessToken,refreshToken,data.role)
  // Hash password
  data.password = await bcrypt.hash(
    data.password,
    Number(config.bycrypt_salt_rounds)
  );
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const getAllUsers = async (): Promise<any[]> => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return result;
};

const getUserById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteUser = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userAuthService = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
