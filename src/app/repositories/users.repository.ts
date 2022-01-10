import { Users } from "@app/entities/user.entity"
import { getManager, DeepPartial, FindConditions, getRepository, FindOneOptions } from "typeorm"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"

const save = (user: DeepPartial<Users>) => {
    const manager = getManager()
    const self = manager.create(Users, user)
    return manager.save(self)
}

const findAll = (conditions?: FindConditions<Users>) => {
    const repository = getRepository(Users)
    return repository.find(conditions)
}

const findOne = (conditions?: FindConditions<Users>, options?: FindOneOptions<Users>) => {
    const repository = getRepository(Users)
    return repository.findOne(conditions, options)
}

const update = (conditions: FindConditions<Users>, partialEntity: QueryDeepPartialEntity<Users>) => {
    const repository = getRepository(Users)
    return repository.update(conditions, partialEntity)
}

const remove = (conditions: FindConditions<Users>) => {
    const repository = getRepository(Users)
    return repository.delete(conditions)
}

export default { save, findAll, findOne, update, remove }