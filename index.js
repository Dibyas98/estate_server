
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import dbConnect from './model/database.js';
import userRouter from './route/user.js'

const app = express();
dbConnect(process.env.DATABASE_URL)

app.use(express.json());
app.use('/api/user',userRouter);
app.use((err,req,res,next) =>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})

app.listen(4000,()=>{
    console.log('server is started');
})






