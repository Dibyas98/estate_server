import express from 'express';
const route = express.Router();
const list = [
    {
        id:1
    },{
        id:2
    },{
        id:3
    }
]
route.get('/',async(req,res)=>{
    console.log('jj');
    // const fil = list.filter((ele) => req.params.id!=ele.id);
    // console.log(fil);
    // res.json({
    //     success:fil
    // })
})

export default route