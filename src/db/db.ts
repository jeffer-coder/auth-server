import {createConnection} from 'typeorm'

createConnection().then(() => {
    console.log('typeorm application')
}).catch(error => {
    console.log(error)
})
