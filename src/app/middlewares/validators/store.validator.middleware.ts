import { NextFunction, Request, Response } from "express";
import { userSchema } from "@app/validators/user.store.validator"

export default async (req: Request,res: Response, next : NextFunction) => {
    try {
        await userSchema.validate(req.body)
        next()
    } catch (err: any) {
        next(err)
    }
}