import { NextFunction, Request, Response } from "express";
import { userSchema } from "@app/validators/user.store.validator"

export default async (req: Request,res: Response, next : NextFunction) => {
    try {
        await userSchema.validate(req.body)
        next()
    } catch (error: any) {
        res.status(400).send({msg: error.message})
    }
}