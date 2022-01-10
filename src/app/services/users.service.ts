import { UsersCreateDto } from "@app/dto/users/users.create.dto"
import { UsersUpdateDto } from "@app/dto/users/users.update.dto"
import usersRepository from "@app/repositories/users.repository"

const create = async (usersDto: UsersCreateDto) => {
    const users = usersRepository.save(usersDto)
    return users
}

const findAll = async () => {
    try {
        const users = usersRepository.findAll()
        return users
    } catch (error: any) {

    }
}

const findOne = async (id: string) => {
    try {
        const users = usersRepository.findOne({ id })
        return users
    } catch (error: any) {

    }
}

const update = async (id: string, usersDto: UsersUpdateDto) => {
    try {
        const users = usersRepository.update({ id }, usersDto)
        return users
    } catch (error: any) {

    }
}

const remove = async (id: string) => {
    try {
        const users = usersRepository.remove({ id })
        return users
    } catch (error) {

    }
}

export default { create, findOne, findAll, update, remove }