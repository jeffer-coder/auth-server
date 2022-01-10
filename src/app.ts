import router from '@app/router'
import '@db/db'
import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)


export default app