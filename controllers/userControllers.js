// const express = require("express")
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// get all users if you are admin or manager
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({})
		res.status(200).json({ msg: 'successfully got all users', users })
	} catch (err) {
		res.status(400).json({ msg: err.message })
	}
}

// signup controller
const userSignup = async (req, res) => {
	try {
		//checking existence
		// const isAlreadyUser= await User.findOne({email:req.body.email})

		// if(isAlreadyUser){
		//     return res.status(401).json({msg:"User already exists!"})    //i think no need
		// }

		// creating user
		// const user = await User.create({ name, email, password })

		const user = new User(req.body)
		await user.save()
		if (user) {
			const token = await user.generateAuthToken()
			console.log('pass correct in login2')
			return res
				.status(201)
				.json({ msg: 'User Created Successfully!!!', user, token })
		}
	} catch (err) {
		if (err.keyPattern.email) {
			return res.status(401).json({ msg: 'User already exists!' })
		} else if (err.keyPattern.username) {
			return res.status(401).json({ msg: 'Username taken!' })
		}
		res.status(400).json({ msg: err.message })
	}
}

// login controller
const userLogin = async (req, res) => {
	try {
		console.log('logining...')
		const user = await User.findOne({ email: req.body.email })

		console.log('user found', user)

		//to verify the password
		if (user) {
			const isPassCorrect = await bcrypt.compare(
				req.body.password,
				user.password
			)

			console.log('pass correct in login1 ')

			if (isPassCorrect) {
				const token = await user.generateAuthToken()
				console.log('pass correct in login2')
				return res.status(200).json({ msg: 'Login Successful!!!', user, token })
			}
			console.log('pass wrong')
			return res.status(401).json({
				message: 'Login Unable!',
			})
		}
		console.log('not exist')

		res.status(403).json({ msg: 'Whooo Areee youuuuuu ???' })
	} catch (err) {
		res.status(400).json({ msg: err.message })
	}
}

//update user controller
const userUpdate = async (req, res) => {
	try {
		//used my own method to update and keep .pre middleware running properly

		//we used jwtAuth middleware
		for (var prop in req.body) {
			if (prop !== 'email') {
				req.user[prop] = req.body[prop]
			}
		}
		//to save updated user
		const updatedUser = new User(req.user)
		await updatedUser.save()

		res.status(200).json({ msg: 'user updated successfully', updatedUser })
	} catch (err) {
		if (err.keyPattern.username) {
			return res.status(401).json({ msg: 'Username taken!' })
		}
		res.status(400).send(err)
	}
}

//logout controller
const userLogout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token //for logout a specific session
		})

		await req.user.save()
		res.send('logout successfully')
	} catch (err) {
		res.status(400).send(err)
	}
}

//lgout allSessions controller
const logoutAllSessions = async (req, res) => {
	try {
		isEmailCorrect = req.body.email == req.user.email
		isPasswordCorrect = await bcrypt.compare(
			req.body.password,
			req.user.password
		)

		if (isEmailCorrect && isPasswordCorrect) {
			req.user.tokens = [] //for logoutAllSessions

			await req.user.save()
			return res
				.status(200)
				.json({ msg: 'logout Successfully', user: req.user })
		}

		return res.status(400).json({ msg: 'can not logout', user: req.user })
	} catch (err) {
		res.status(400).json({ err: err.message })
	}
}

module.exports = {
	userSignup,
	userLogin,
	userLogout,
	logoutAllSessions,
	userUpdate,
	getAllUsers,
}
