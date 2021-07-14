const Book = require("../models/bookModel")

//getting all the books 
const getAllBooks = async(req,res)=>{
    try{
        const books=await Book.find({})
        res.status(200).json({msg:"Successfully Got All The Books",books})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
}

const bookAdd=async(req,res)=>{
    try{
        const book = new Book(req.body)
        await book.save()
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
}