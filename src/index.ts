import { PrismaClient } from '@prisma/client'
import express from "express"
import router from './routes'

const app = express()
const prisma = new PrismaClient()

app.use(router)
app.listen(8000)