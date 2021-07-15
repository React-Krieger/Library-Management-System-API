const Books = require("../models/booksModel")

//getting all the books 
const getAllBooks = async(req,res)=>{
    try{
        const books=await Books.find({})
        res.status(200).json({msg:"Successfully Got All The Books",books})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
}

const bookAdd=async(req,res)=>{
    try{
        const book = new Books(req.body)
        await book.save()
        res.status(201).json({msg:"book added successfully",book})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
}

module.exports = {getAllBooks, bookAdd}