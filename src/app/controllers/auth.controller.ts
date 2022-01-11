import authService from "@app/services/auth.service"
import { NextFunction, Request, Response } from "express"

const signin =  async (req: Request, res: Response,next: NextFunction) => {
    try {
        const {email,password} = req.body
        const user = await authService.signin(email,password)
        res.status(200).send(user)
    } catch (err: any) {
        next(err)
    }
}

const signup = () => {

}


export default {signin,signup}