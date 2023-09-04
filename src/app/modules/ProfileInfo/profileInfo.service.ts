import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getCustomerProfileData = async(user:any):Promise<User | null>=>{
    const result = await prisma.user.findUnique({
      where:{
        id: user.userId
      }
    });
    return result;
  }

  export const getCustomerProfileService = {
    getCustomerProfileData
  }