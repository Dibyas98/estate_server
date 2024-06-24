import listingModel from "../model/listing.js";
import { errorHandeler } from "../utils/error.js";
import userModel from "../model/user.js";
const createListing = async(req,res,next)=>{
    try {
        const data = {...req.body,userRef:req.user.id}
        
        const listing = await listingModel.create(data);
        await userModel.findByIdAndUpdate(data.userRef,{$push : {listing:listing._id}})
        res.json({
            success : true,
            listing
        })


    } catch (error) {
        console.log(error);
        next(errorHandeler(500,error.errorResponse.errmsg))
    }
}

const getListingById = async(req,res,next) =>{
    try {
        console.log(req.user);
        // if (req.user.id === req.params.id){
            const list = await listingModel.find({userRef:req.params.id}).populate({path:"userRef"})
            res.json({
                success:true,
                list
            })
        // }else{
        //     next(errorHandeler(401,'Something went wrong'))
        // }
        
    } catch (error) {
        console.log(error);
        
    }
}

const listingControl = {
    createListing,
    getListingById
}

export default listingControl;