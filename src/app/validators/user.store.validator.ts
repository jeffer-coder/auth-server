import { object, string } from 'yup'

const userSchema = object({
    username: string().required().nullable(false).min(5).max(10),
    email: string().required().nullable(false).email(),
    password: string().required().nullable(false).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

export {userSchema}