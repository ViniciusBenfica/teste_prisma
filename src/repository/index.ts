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

export const create = async (user: User): Promise<User | void> => {
    try{
        let createUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
            }
        })
        return createUser
    }catch(error){
        console.log("Error")
    }
}