const mongoose =  require("mongoose")

const bookSchema = mongoose.Schema({
    image:{
        type:Buffer,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true,
        default:'PDF'
    },
    ISBN:{
        type:String,
        required:true,
        unique:true
    },
    availibity:{
        type:String,
        required:true,
        default:'not available'
    },
    edition:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
        default:'Unknown'
    },
    categories:[
        {
         type:String,
         required:true   
        }
    ],
    condition:{
        type:String,
        required:true,
        default:'Normal'
    },
    issued:{
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps:true
    
})


const Book = mongoose.model('Book',bookSchema)

module.exports = Book