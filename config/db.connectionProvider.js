import config from './index'
import mongoose from 'mongoose'

export default function connectionProvider(url, database, options) {
    const opts = Object.assign({}, { useNewUrlParser: true }, options)
    const address = `${config.dbHost+config.dbName}`
    return mongoose.connect(address, opts)
}
