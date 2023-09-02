import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

const bookCreate = async(data:Book):Promise<Book> =>{
    const result = await prisma.book.create({
        data,
        include:{
            category: true
        }
    },
    
    );
    return result;
};

export const BookService = {
    bookCreate
}