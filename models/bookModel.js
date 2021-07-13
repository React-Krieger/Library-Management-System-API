const mongoose =  require("mongoose")

const bookSchema = mongoose.Schema({
    image:{
        type:Buffer,
        required:true
    },
    name:{
        type:String,
        required:true
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
        required:true
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
        required:true
    }
},
{
    timestamps:true
    
})


const Book = mongoose.model('Book',bookSchema)

module.exports = Book