import listingModel from "../model/listing.js";
import { errorHandeler } from "../utils/error.js";
const createListing = async(req,res)=>{
    try {
        console.log(req.user);
        const data = {...req.body,userRef:req.user.id}
        const listing = await listingModel.create(req.body);

        res.json({
            success : true,
            listing
        })
    } catch (error) {
        console.log(error);
    }
}

const getListingById = async(req,res,next) =>{
    try {
        console.log(req.user);
        // if (req.user.id === req.params.id){
        //     const list = await listingModel.find({userRef:req.params.id})
            res.json({
                success:true,
                // list
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