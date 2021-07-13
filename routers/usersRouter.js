const express = require('express');
const { 
    userSignup, 
    userLogin, 
    userLogout, 
    userUpdate, 
    logoutAllSessions,
    getAllUsers
} = require('../controllers/userControllers');

const router = express.Router();

const {jwtAuth, adminAuth} = require("../middlewares/jwtAuth")

router.post("/signup",userSignup)
router.post("/login",userLogin)

router.post("/getallusers",jwtAuth, adminAuth, getAllUsers)

router.patch('/update', jwtAuth, userUpdate)

router.delete('/logout', jwtAuth, userLogout)
router.delete('/logoutall', jwtAuth, logoutAllSessions)


module.exports = router;
