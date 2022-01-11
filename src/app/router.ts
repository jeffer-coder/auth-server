import { Router } from "express";
import usersController from "./controllers/users.controller";
import userValidator from "@app/middlewares/validators/store.validator.middleware"
import authController from "./controllers/auth.controller";
import signinValidator from "./middlewares/validators/signin.validator.middleware";
import jwtAuth from "./middlewares/auth/jwt.auth";
const router = Router()

router.post('/users',userValidator, usersController.store)
router.get('/users', usersController.index)
router.get('/users/:id', usersController.show)
router.patch('/users/:id', usersController.edit)
router.delete('/users/:id', usersController.destroy)


router.get('/auth',jwtAuth,(req,res) => res.status(200).send(req.user))
router.post('/auth/signin',signinValidator, authController.signin)
router.post('/auth/signup',authController.signup)

export default router