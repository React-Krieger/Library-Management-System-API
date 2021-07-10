const mongoose =  require("mongoose")

const bookCategorySchema = mongoose.Schema({

    category:{
        
        name:{
            type:String,
            required:true,
            unique:true
        },
        books:[
            {
                ref_id:{
                    type:mongoose.Schema.Types.ObjectId,
                    required:true,
                    unique:true
                },
                name:{
                    type:String,
                    required:true
                }
            }
        ]
    }
},
{
    timestamps:true
    
})


const BookCategory = mongoose.model('bookCategory',bookCategorySchema)

export default BookCategory