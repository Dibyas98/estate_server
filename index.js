
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import dbConnect from './model/database.js';
import userRouter from './route/user.js'

const app = express();
dbConnect(process.env.DATABASE_URL)

app.use(express.json());
app.use('/api/user',userRouter);

app.listen(4000,()=>{
    console.log('server is started');
})






