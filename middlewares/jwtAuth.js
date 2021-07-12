const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const dotenv = require("dotenv")

dotenv.config()

const jwtAuth = async (req, res, next) => {

    try {
        console.log(req.body)
        // const token = req.header("Authorization").replace("Bearer ", "")
        const token = req.body.token
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        
        if (!user){
            throw new Error()
        }
        req.token=token
        req.user=user
        console.log("authorized")

        next()
    }
    catch (err) {
        res.status(401).json({error:"Please Authenticate"} )
    }
}

module.exports = jwtAuth