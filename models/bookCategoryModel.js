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
                    ref: 'Book'
                }
            }
        ]
    }
},
    {
        timestamps: true

    })


const BookCategory = mongoose.model('BookCategory', bookCategorySchema)

module.exports = BookCategory

