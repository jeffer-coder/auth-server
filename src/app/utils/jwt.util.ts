import jwt from 'jsonwebtoken'


const private_key = process.env.JWT_PRIVATE_KEY as string

const sign = (payload: {}) =>  jwt.sign(payload,private_key,{expiresIn: '1D'})
const verify = (token: string) => jwt.verify(token,private_key)

export default {sign,verify}