import listingModel from "../model/listing.js";
import { errorHandeler } from "../utils/error.js";
import userModel from "../model/user.js";
const createListing = async (req, res, next) => {
    try {
        const data = { ...req.body, userRef: req.user.id }
        console.log(data);
        const listing = await listingModel.create(data);
        await userModel.findByIdAndUpdate(data.userRef, { $push: { listing: listing._id } })
        res.json({
            success: true,
            listing
        })
    } catch (error) {
        console.log(error);
        // next(errorHandeler(500, error.errorResponse.errmsg))
    }
}

const getListingById = async (req, res, next) => {
    try {
        // const list = await listingModel.findById(req.params.id).populate({path:"userRef"})
        const list = await listingModel.findById(req.params.id)
        res.json({
            success: true,
            list
        })
    } catch (error) {
        next(errorHandeler(500, error.errorResponse.errmsg))
    }
}

const updateListingId = async(req,res,next)=>{
    try {
        const list = await listingModel.findById(req.params.id);
        if(list.userRef === req.user.id){
            res.json({
                success:true,
                message:"Dummy api"
            })
        }else{
            next(errorHandeler(404,'Authorization Denied'))
        }
    } catch (error) {
        next(errorHandeler(500,error.errorResponse.errmsg))
    }
}

const deleteListingId = async (req, res, next) => {
    try {
        const list = await listingModel.findById(req.params.id);
        if (list.userRef === req.user.id) {
            await listingModel.findByIdAndDelete(req.params.id)
            res.json({
                success: true,
                message: "Listing Delete Successfully"
            })
        } else {
            next(errorHandeler(404,"No Listing Found in this Id"))
        }

    } catch (error) {
        next(errorHandeler(500, error.errorResponse.errmsg))
    }

}

const getListingAll= async(req,res,next)=>{
    console.log(req.user.id);
    try {
        const list = await listingModel.find({ userRef: req.user.id });
        res.json({
            success:true,
            list
        })
    } catch (error) {
        console.log(error);
        next(errorHandeler(500, error))
    }
}

const listingControl = {
    createListing,
    getListingById,
    deleteListingId,
    updateListingId,
    getListingAll
}

export default listingControl;