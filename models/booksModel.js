const mongoose = require('mongoose')

const bookReviewsSchema = mongoose.Schema(
	{
		userRefId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		comment: {
			type: String,
			required: true,
			default: '',
		},
	},
	{
		timestamps: true,
	}
)

const bookSchema = mongoose.Schema(
	{
		// image: {
		// 	type: Buffer,
		// 	required: true,
		// 	unique: true,
		// },
		name: {
			type: String,
			required: true,
			unique: true,
		},
		type: {
			type: String,
			required: true,
			default: 'PDF',
		},
		ISBN: {
			type: String,
			required: true,
			unique: true,
		},
		availibility: {
			type: String,
			required: true,
			default: 'not available',
		},
        quantity:{
            type:Number,
            required:true,
            default:0
        },
		edition: {
			type: String,
			required: true,
			defaullt:'0'
		},
		author: {
			type: String,
			required: true,
			default: 'Unknown',
		},
		reviews: [bookReviewsSchema],
		categories: [
			{
				type: String,
				required: true,
			},
		],
		condition: {
			type: String,
			required: true,
			default: 'Normal',
		},
		issued: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

const Books = mongoose.model('Books', bookSchema)

module.exports = Books
