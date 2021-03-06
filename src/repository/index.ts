import { PrismaClient } from '@prisma/client'
import { User } from '../Types/Iuser'

const prisma = new PrismaClient()

export const list = async (): Promise<User[] | void> => {
    try {
        let allUser = await prisma.user.findMany()
        return allUser
    } catch (error) {
        console.log("Error")
    }
}

export const find = async (id: number): Promise<User | void | null> => {
    try {
        let user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    } catch (error) {
        console.log("Error")
    }
}

export const create = async (user: User): Promise<User | void> => {
    try {
        let createUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
            }
        })
        return createUser
    } catch (error) {
        console.log("Error")
    }
}

export const deleteUser = async (id: number): Promise<string | void> => {
    try {
        await prisma.user.delete({
            where: {
                id
            }
        })
        return `User ${id} deleted`
    } catch (error) {
        console.log("Error")
    }
}

export const update = async (id: number, user: User): Promise<User | void> => {
    try {
        let userUpdate = await prisma.user.update({
            where: {
                id
            },
            data: {
                name: user.name,
                email: user.email
            }
        })
        return userUpdate
    } catch (error) {
        console.log("Error")
    }
}