import {start} from './lib/server.js'
console.log(process.env.PORT, process.env.CORS_ORIGINS);

start({PORT: process.env.PORT, MONGO_URI: process.env.MONGO_URI})  