import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    regularPrice:{
        type:Number,
        require:true
    },
    discountPrice:{
        type:Number,
        require:true
    },
    bathrooms:{
        type:Number,
        require:true
    },
    bedrooms:{
        type:Number,
        require:true
    },
    furnished:{
        type:Boolean,
        require:true
    },
    parking:{
        type:Boolean,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    offer:{
        type:Boolean,
        require:true
    },
    imageUrl:{
        type:Array,
        require:true
    },
    userRef:{
        type:String,
        require:true
    },
    userRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    }

   
},{timestamps :true});

const listingModel = mongoose.model('listing',listingSchema);
export default listingModel