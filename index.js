const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./model/database')
const app = express();
dbConnect(process.env.DATABASE_URL)


app.use(express.json());

app.listen(4000,()=>{
    console.log('server is started');
})






