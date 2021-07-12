const mongoose =  require("mongoose")

const issuedBookSchema = mongoose.Schema({
    issuedBooks:[
        {
            ref_id:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                unique:true
            },
            name:{
                type:String,
                required:true
            },
            category:{
                type:String,
                required:true
            },
            issuedBy:{
                name:{
                    type:String,
                    required:true
                },
                userId:{
                    type:mongoose.Schema.Types.ObjectId,
                    required:true,
                    // unique:true
                }
            },

        }
    ]
},
{
    timestamps:true
    
})


const IssuedBook = mongoose.model('issuedBook',issuedBookSchema)

modile.exports =  IssuedBook