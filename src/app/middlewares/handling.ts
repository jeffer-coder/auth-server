import { NextFunction, Request, Response, Errback } from "express";

export default async (err: Errback,req: Request,res: Response, next : NextFunction) => {
    res.status(500).send({err})
}