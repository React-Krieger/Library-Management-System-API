const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

// local modules
const booksRouter = require('./routers/booksRouter')
const usersRouter = require('./routers/usersRouter')
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares')
// initialization of express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// middlewares
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/books',booksRouter);
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(notFound)
app.use(errorHandler)
// error handler
app.use(function (err, req, res, next) {
	console.log(' no 3')
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
