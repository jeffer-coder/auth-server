import handling from '@app/middlewares/handling'
import router from '@app/router'
import '@db/db'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

app.use(cors({origin:'*'}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router,handling)


export default app