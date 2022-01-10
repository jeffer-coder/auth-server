import { Router } from "express";
import usersController from "./controllers/users.controller";
import userMiddleware from "@app/middlewares/user.validator.store.middleware"
const router = Router()

router.post('/users',userMiddleware, usersController.store)
router.get('/users', usersController.index)
router.get('/users/:id', usersController.show)
router.patch('/users/:id', usersController.edit)
router.delete('/users/:id', usersController.destroy)


export default router