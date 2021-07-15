const mongoose = require("mongoose")

const topBookListSchema = mongoose.Schema({
    bookRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Books'
    },
    users:[
        {
            userRefId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Users",
            }
        }
    ]
},
{   
    timestamps: true,
});

const TopBookList = mongoose.model("TopBookList", topBookListSchema)

module.exports = TopBookList
