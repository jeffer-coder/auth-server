import usersService from "@app/services/users.service";
import { Request, Response } from "express";

const store = async (req: Request, res: Response) => {
    const body = req.body
    const users = await usersService.create(body)
    res.status(201).send(users)
}

const index = async (req: Request, res: Response) => {
    const users = await usersService.findAll()
    res.status(200).send(users)
}

const show = async (req: Request, res: Response) => {
    const users = await usersService.findOne(req.params.id)
    res.status(200).send(users)
}

const edit = async (req: Request, res: Response) => {
    const users = await usersService.update(req.params.id, req.body)
    res.status(200).send(users)
}

const destroy = async (req: Request, res: Response) => {
    const users = await usersService.remove(req.params.id)
    res.status(200).send(users)
}
export default { store, index, show, edit, destroy }