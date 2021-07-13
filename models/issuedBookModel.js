const mongoose = require("mongoose")

const issuedBookSchema = mongoose.Schema({
    issuedBooks: [
        {
            bookRefId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Book",
            },
            userRefId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
        },
    ],
},
    {
        timestamps: true,
    }
);

const IssuedBook = mongoose.model("IssuedBook", issuedBookSchema)

module.exports = IssuedBook
