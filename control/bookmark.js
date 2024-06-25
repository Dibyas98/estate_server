import userModel from "../model/user.js";
import { errorHandeler } from "../utils/error.js"

const bookmarkFunc = async (req, res, next) => {
    let response={
        success: true,
        message: `Item ${req.query.type}`
    }
    let code=200;
    try {
        if (['admin', 'client'].includes(req.user.role)) {
            const list = await userModel.findById(req.user.id);
            const isIdPresent = list.bookmark.find((ele) => ele == req.params.id)
            if (req.query.type === 'add') {
                if (!isIdPresent) {
                    await userModel.findByIdAndUpdate(req.user.id, { $push: { bookmark: req.params.id } })
                    response.message = 'Add Successfully'
                } else {
                    response={
                        success:false,
                        message:'Item Already Added'
                    }
                    code=401
                }
            } else if (req.query.type === 'remove') {
                if (isIdPresent) {
                    await userModel.findByIdAndUpdate(req.user.id, { $pull: { bookmark: req.params.id } })
                    response.message='Remove Successfully'
                } else {
                    response={
                        success:false,
                        message:"Item Not Found"
                    }
                    code=401
                }
            } else {
                next(errorHandeler(404), 'No query found')
            }
            res.status(code).json(response)

        } else {

            const error = new Error();
            error.statuscode = 403,
                error.message = "Forbidden access"
            next(errorHandeler(500, error))
        }

    } catch (error) {
        next(errorHandeler(500, error))
    }
}

export default bookmarkFunc