const jwt = require("jsonwebtoken")
const Users = require("../models/userModel")
const dotenv = require("dotenv")

dotenv.config()

const jwtAuth = async (req, res, next) => {
    try {
        console.log("I am in JWT")
        const token = req.header("Authorization").replace("Bearer ", "")
        // const token = req.body.token
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        
        const user = await Users.findOne({ _id: decoded._id, 'tokens.token': token })
        
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

const adminAuth = async (req, res, next) => {
    try{
        console.log("I am in adminAuth")

        if (req.user && req.user.role==='admin') {
            next()
        } 
        else {
            res.status(401)
            throw new Error('Not authorized user!!')
        }
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
}

module.exports = {jwtAuth, adminAuth}