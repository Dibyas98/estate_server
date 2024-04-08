import userModel from "../model/user.js";
import bcryptjs from 'bcryptjs';

const signup = async (req, res, next) => {
    try {
        const { username, email, password, mobile } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new userModel({ username, email, password: hashedPassword,mobile });
        await newUser.save();
        res.json({
            success: true
        });
    } catch (error) {
        next(error);
    }
};

const userControl = {
    signup
};

export default userControl;
