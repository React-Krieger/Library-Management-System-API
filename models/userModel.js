const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require('validator')

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[{validator:validator.isEmail,message:"Invalid email"}]
    },
    password:{
        type:String,
        required:true,
        validate:[{validator:validator.isStrongPassword,message:"Weak password"}]
    },
    role:{
        type:String,
        required:true,
        default:'visitor'
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},
{
    timestamps:true
    
})

userSchema.methods.generateAuthToken=async function(){
    const user=this

    const token=await jwt.sign({_id:user._id.toString()},process.env.SECRET_KEY)
    console.log("token created")
    user.tokens=user.tokens.concat({token})
    await user.save()
    
    return token
}

userSchema.pre('save',async function(){
    const user = this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password, 8)
        console.log("Password hashed",user.password)
    }
})

// to create new user model
const User = mongoose.model('User',userSchema)

module.exports = User