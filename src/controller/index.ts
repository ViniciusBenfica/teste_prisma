import { User } from "@prisma/client";
import { Request, Response } from "express";
import { find } from "../Repository";

export const list = async (req: Request, res: Response): Promise<User[] | object> => {
    try{
        let userList = await find()
        return res.status(200).json(userList)
    }catch(error){
        return res.status(500).json("Error")
    }

}