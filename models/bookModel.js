const mongoose =  require("mongoose")

const bookSchema = mongoose.Schema({
    image:{
        type:File,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    ISBN:{
        type:Number,
        required:true,
        unique:true
    },
    availibity:{
        type:String,
        required:true
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
        required:true
    },
    issued:{
        type:Boolean,
        required:true
    }
},
{
    timestamps:true
    
})


const Book = mongoose.model('book',bookSchema)

module.exports = Book