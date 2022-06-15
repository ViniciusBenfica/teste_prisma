import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
    data:{
        name: "Benfica",
        email: "benfica@gmail.com"
    }
})