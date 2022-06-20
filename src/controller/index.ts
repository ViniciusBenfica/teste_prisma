import { User } from "@prisma/client";
import { Request, Response } from "express";
import { create, list, find, deleteUser } from "../Repository";

export const listUser = async (req: Request, res: Response): Promise<User[] | object> => {
    try{
        let userList = await list()
        return res.status(200).json(userList)
    }catch(error){
        return res.status(500).json("Error")
    }
}

export const findUser = async (req: Request, res: Response): Promise<User[] | object> => {
    try{
        let user = await find(parseInt(req.params.id))
        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json("Error")
    }
}

export const createUser = async (req: Request, res: Response): Promise<User | object> => {
    try{
        let createUser = await create(req.body)
        return res.status(200).json(createUser)
    }catch(error){
        return res.status(500).json("Error")
    }
}

export const userDelete = async (req: Request, res: Response) => {
    try{
        let user = await deleteUser(parseInt(req.body.id))
        return res.status(200).json({message: user})
    }catch(error){
        return res.status(500).json("Error")
    }
}