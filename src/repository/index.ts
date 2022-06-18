import { PrismaClient } from '@prisma/client'
import { User } from '../Types/Iuser'
import { Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const find = async (): Promise<User[] | void> => {
    try{
        let allUser = await prisma.user.findMany()
        return allUser
    }catch(error){
        console.log("Error")
    }

}