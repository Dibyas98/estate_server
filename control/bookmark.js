import { errorHandeler } from "../utils/error.js"

const bookmarkFunc = async (req, res, next) => {
    try {
        if (['admin', 'client'].includes(req.user.role)) {
            if (req.query.type === 'add') {

            } else if (req.query.type === 'remove') {

            } else {
                next(errorHandeler(404), 'No query found')
            }

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