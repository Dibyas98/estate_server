const createListing = async(req,res)=>{
    try {
        res.json({
            success : true,
            message : 'Dummy api call'
        })
    } catch (error) {
        console.log(error);
    }
}

const listingControl = {
    createListing
}

export default listingControl;