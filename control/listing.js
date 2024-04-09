import listingModel from "../model/listing.js";
const createListing = async(req,res)=>{
    try {
        const listing = await listingModel.create(req.body);

        res.json({
            success : true,
            listing
        })
    } catch (error) {
        console.log(error);
    }
}

const listingControl = {
    createListing
}

export default listingControl;