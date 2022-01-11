import { object, string } from 'yup'

const signSchema = object({
    email: string().required().nullable(false).email(),
    password: string().required().nullable(false).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

export {signSchema}