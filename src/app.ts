import router from '@app/router'
import '@db/db'
import express from 'express'
const app = express()



app.use(router)


export default app