import userModel from "../model/user.js";
import bcryptjs from "bcryptjs";
import { errorHandeler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

const signup = async (req, res, next) => {
  try {
    const { username, email, password, mobile } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      mobile,
    });
    await newUser.save();
    res.json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
     const validUser = await userModel.findOne({ email });
    if (!validUser) return next(errorHandeler(404, "User not Found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandeler(401, "Invalid Password"));
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
    res.cookie('access_token',token,{httpOnly:true})
    const {password:pass,...rest} = validUser._doc
   
    res.json({
        success:true,
        message:rest
    });
  } catch (error) {
    // next(error);
    console.log(error);
  }
};
const userControl = {
  signup,
  signin,
};

export default userControl;
