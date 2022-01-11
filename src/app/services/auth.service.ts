import { UsersCreateDto } from "@app/dto/users/users.create.dto"
import usersRepository from "@app/repositories/users.repository"
import { compareSync } from "bcrypt"
import jwtUtil from '@utils/jwt.util'

const signin = async (email: string, password: string) => {

    const users = await usersRepository.findOne({email})

    if (!users || !compareSync(password,users.password)) {
       throw new Error('email or password is incorrect')
    }

    const token = jwtUtil.sign({sub:users.id})

    return {
        id: users.id,
        username: users.username,
        email: users.email,
        token: token
    }

}

export default {signin}