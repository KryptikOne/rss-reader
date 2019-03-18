require('dotenv').config({ path: './.env' })

const config = {
    env: process.env.NODE_ENV || 'development',
    host: process.env.HOST,
    port: process.env.PORT,
    dbHost: process.env.DATABASE_HOST,
    dbName: process.env.DATABASE_NAME
}

export default config