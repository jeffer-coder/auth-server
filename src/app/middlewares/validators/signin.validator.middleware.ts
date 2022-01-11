import { NextFunction, Request, Response } from "express";
import { signSchema } from "@app/validators/schemas/signin.schema"

export default async (req: Request,res: Response, next : NextFunction) => {
    try {
        await signSchema.validate(req.body)
        next()
    } catch (err: any) {
        next(err)
    }
}