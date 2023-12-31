import { IGenericResponse } from './../../../interfaces/common';
import { Book, Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IBooksFilterRequest } from './book.interface';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { booksSearchableFields } from './book.constants';

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

const getAllBooks = async(
    filters: IBooksFilterRequest,
    options: IPaginationOptions
):Promise<IGenericResponse<Book[]>> =>{
    const { limit, page, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm, ...filterData } = filters;

    const andConditions = [];

    if (searchTerm) {
        andConditions.push({
            OR: booksSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        });
    }

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        });
    }

    const whereConditions: Prisma.BookWhereInput =
        andConditions.length > 0 ? { AND: andConditions } : {};


    const result = await prisma.book.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy:
            options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                    publicationDate: 'desc'
                }
    });

    const total = await prisma.book.count({
        where: whereConditions
    });
    
    const totalPage = Math.ceil(total/limit)
    return {
        meta: {
            total,
            page,
            size:limit,
            totalPage
        },
        data: result
    };
}

const  getBooksByCategoryId = async(categoryId: string, options: IPaginationOptions): Promise<IGenericResponse<Book[]>>=>{
    const { limit, page, skip } = paginationHelpers.calculatePagination(options);
    const result = await prisma.book.findMany({
        where: {
            categoryId
        },
        skip,
        take: limit,
        orderBy:
            options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                    publicationDate: 'desc'
                }
    });

    const total = await prisma.book.count({
        where: {categoryId}
    });
    
    const totalPage = Math.ceil(total/limit)
    return {
        meta: {
            total,
            page,
            size:limit,
            totalPage
        },
        data: result
    };
}


const getSingleBook = async(id: string): Promise<Book | null>=>{
    const result = await prisma.book.findUnique({
        where:{
            id
        }
    });
    return result;
};

const updateSingleBook = async(id: string,payload: Book):Promise<Book>=>{
    const result = await prisma.book.update({
        where:{
            id
        },
        data:payload
    });
    return result;
}

const deleteBook = async(id: string): Promise<Book>=>{
    const result = await prisma.book.delete({
        where:{
            id
        }
    });
    return result;
}

export const BookService = {
    bookCreate,
    getAllBooks,
    getBooksByCategoryId,
    getSingleBook,
    updateSingleBook,
    deleteBook
}