
import { NextFunction, Request, Response } from "express"
import jwtUtil from "@app/utils/jwt.util"


export default async (req: Request,res: Response, next : NextFunction) => {
    try {

        if (req.headers.authorization) {
            const [,token] = req.headers.authorization?.split(' ')

            const payload = jwtUtil.verify(token)
            req.user = payload.sub as string

            next()
        }
   
    } catch(err : any) {
        next(err)
    }
}