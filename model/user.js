import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    mobile:{
        type:Number,
        require:true
    }
    

},{timestamps:true});

const userModel = mongoose.model('users',userSchema);
export default userModel;

