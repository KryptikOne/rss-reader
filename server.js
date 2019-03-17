import config from './config'
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import connectionProvider from './config/db.connectionProvider'
import routeConfig from './app/routes/item.routes'

const app = express()
const router = express.Router()

app.use(helmet())
app.use(helmet.contentSecurityPolicy({directives: {defaultSrc: ["'self'"]}}))
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }))
app.use(bodyParser.urlencoded({ extended: true }))// parse application/x-www-form-urlencoded
app.use(bodyParser.json())// parse application/json
app.use(cors())

connectionProvider()
routeConfig(app, router)

app.listen(config.port, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log(`Server listening at http://${config.host}:${config.port}`)
    }
})