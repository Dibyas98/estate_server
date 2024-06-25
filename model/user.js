import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        default:'client'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true
    },
    listing: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: "listings"
    },
    bookmark: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: "listings"
    }
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);
export default userModel;
