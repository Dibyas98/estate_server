
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './model/database.js';
import userRouter from './route/user.js'
import listingRouter from './route/listing.js'
import cookieParser from 'cookie-parser';
import book from './route/bookmark.js'


dotenv.config();
const app = express();
dbConnect(process.env.DATABASE_URL)


app.use(cors(
    {
        origin:'http://localhost:5173/',
        credentials: true
    }
))
app.use(express.json());
app.use(cookieParser());
app.use('/api/user',userRouter);
app.use('/api/listing',listingRouter)
app.use('/api/book',book)

app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
app.use((err,req,res,next) =>{
    console.log(err);
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






