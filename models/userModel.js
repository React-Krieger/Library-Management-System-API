const mongoose = require("mongoose")
const bcrypt = require("bcrypt")



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
        required:true
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


userSchema.pre('save',async ()=>{
    const user = this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password, 8)
        console.log("Password hashed",user.password)
    }
})

// to create new user model
const User = mongoose.model('user',userSchema)

export default User