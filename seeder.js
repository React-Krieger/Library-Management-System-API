const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')

const connectDB = require('./config/database')

// models
const Users = require('./models/userModel')
const Books = require('./models/bookModel')
const IssuedBooks = require('./models/issuedBooksModel')
const BookCategories = require('./models/bookCategoryModel')
const TopBooks = require('./models/topBooks_ReadersModel')

//sample data
const sampleUsers = require('./sampleData/sampleUsers')
const sampleBooks = require('./sampleData/sampleBooks')
const sampleIssuedBooks = require('./sampleData/sampleIssuedBooks')
const sampleTopBooks = require('./sampleData/sampleTopBooks')
const sampleBookCategories = require('./sampleData/sampleBookCategories')

connectDB()
dotenv.config()

const importData = async () => {
    try{
        //deleting all the data
        await Users.deleteMany()
        await Books.deleteMany()
        await IssuedBooks.deleteMany()
        await BookCategories.deleteMany()
        await TopBooks.deleteMany()
        
        //inserting sample data
        await Users.insertMany(sampleUsers)
        await Books.insertMany(sampleBooks)
        await IssuedBooks.insertMany(sampleIssuedBooks)
        await BookCategories.insertMany(sampleBookCategories)
        await TopBooks.insertMany(sampleTopBooks)

        console.log(`Sample Data Imported!`.green.inverse)
        process.exit()
    }
    catch(err){
        console.log(`${err}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        //deleting all the data
        await Users.deleteMany()
        await Books.deleteMany()
        await IssuedBooks.deleteMany()
        await BookCategories.deleteMany()
        await TopBooks.deleteMany()
        
        console.log(`Data Destroyed !`.red.inverse)
        process.exit()
    }
    catch(err){
        console.log(`${err}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}
else{
    importData()
}
