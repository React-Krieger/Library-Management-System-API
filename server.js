const http = require("http")
const app = require("./app.js")
const connectDB = require("./config/database")
server = http.createServer(app)

// connect database
connectDB()

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})