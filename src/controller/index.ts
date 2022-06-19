import { User } from "@prisma/client";
import { Request, Response } from "express";
import { create, find } from "../Repository";

export const list = async (req: Request, res: Response): Promise<User[] | object> => {
    try{
        let userList = await find()
        return res.status(200).json(userList)
    }catch(error){
        return res.status(500).json("Error")
    }
}

export const post = async (req: Request, res: Response): Promise<User | object> => {
    try{
        let createUser = await create(req.body)
        return res.status(200).json(createUser)
    }catch(error){
        return res.status(500).json("Error")
    }
}