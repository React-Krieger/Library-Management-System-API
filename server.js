const http = require("http")
const app = require("./app.js")
const connectDatabase = require("./config/database")
server = http.createServer(app)

// connect database
connectDatabase()

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})