const mongoose = require("mongoose")

const bookCategorySchema = mongoose.Schema({
    category: {
        
        name: {
            type: String,
            required: true,
            unique: true
        },
        books: [
            {
                bookRefId: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Books'
                }
            }
        ]
    }
},
    {
        timestamps: true

    })


const BookCategories = mongoose.model('BookCategories', bookCategorySchema)

module.exports = BookCategories

