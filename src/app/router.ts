import { Router } from "express";
import usersController from "./controllers/users.controller";
const router = Router()

router.post('/users', usersController.store)
router.get('/users', usersController.index)
router.get('/users/:id', usersController.show)
router.patch('/users/:id', usersController.edit)
router.delete('/users/:id', usersController.destroy)


export default router