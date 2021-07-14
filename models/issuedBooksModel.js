const mongoose = require("mongoose")

const issuedBooksSchema = mongoose.Schema({
    issuedBooks: [
        {
            bookRefId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Books",
            },
            userRefId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Users",
            },
        },
    ],
},
    {
        timestamps: true,
    }
);

const IssuedBooks = mongoose.model("IssuedBooks", issuedBooksSchema)

module.exports = IssuedBooks
